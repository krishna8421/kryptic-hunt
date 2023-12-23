"use server";

import { submitAnswerSchema } from "@/schemas/answer";
import questions from "@/../prisma/data/questions.json";
import { db } from "@/server/db";

interface ISubmitAnswerProps {
  formData: FormData;
  questionSequence: number;
  userId: string;
}
interface ISubmitAnswerResponse {
  success: boolean;
  message: string;
}

export const submitAnswer = async ({
  formData,
  questionSequence,
  userId,
}: ISubmitAnswerProps): Promise<ISubmitAnswerResponse> => {
  "use server";

  const validatedFields = submitAnswerSchema.safeParse({
    answer: formData.get("answer"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: validatedFields.error.flatten().fieldErrors.answer?.[0] ?? "Data Validation Error",
    };
  }

  try {
    const answer = validatedFields.data.answer.trim();

    const question = await db.question.findUnique({
      where: { sequence: questionSequence },
      select: {
        answer: true,
      },
    });

    if (question?.answer !== answer) {
      return {
        success: false,
        message: "Incorrect answer. Please try again.",
      };
    }

    const checkForPreviousSubmission = await db.userSubmission.findFirst({
      where: {
        question: {
          sequence: questionSequence,
        },
        user: {
          id: userId,
        },
      },
    });

    if (checkForPreviousSubmission) {
      return {
        success: true,
        message: "You've already submitted an answer for this question.",
      };
    }

    await db.userSubmission.create({
      data: {
        answer: validatedFields.data.answer,
        question: {
          connect: {
            sequence: questionSequence,
          },
        },
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
    const totalQuestions = questions.length;

    if(totalQuestions === questionSequence){
      await db.user.update({
        where: {
          id: userId,
        },
        data: {
          hasCompleted: true,
        },
      })
    }else{
      await db.user.update({
        where: {
          id: userId,
        },
        data: {
          currentQuestionSequence: questionSequence + 1,
        },
      })
    }


    return {
      success: true,
      message: "Correct answer!",
    };
  } catch (err) {
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
};
