"use server";

import { submitAnswerSchema } from "@/schemas/answer";
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
    const answer = validatedFields.data.answer;

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
