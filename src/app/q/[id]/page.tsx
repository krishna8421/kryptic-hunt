import { db } from "@/server/db";
import questions from "@/../prisma/data/questions.json";
import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";
import QuestionForm from "./question-form";

const Question = async ({ params }: { params: { id: string } }) => {
  const totalQuestions = questions.length;
  const session = await getServerAuthSession();

  const questionSequence = Number(params.id);
  // if (Number.isNaN(questionSequence)) {
  //   throw new Error("Invalid question id");
  // }

  const userId = session?.user?.id!;

  const userData = await db.user.findUnique({
    where: { id: userId },
  });

  if (userData?.hasCompleted) {
    redirect(`/end`);
  }

  if (userData?.currentQuestionSequence !== questionSequence) {
    redirect(`/end`);
  }

  // Maybe Not Needed
  const userSubmissionsForQuestion = await db.userSubmission.findFirst({
    where: {
      question: {
        sequence: questionSequence,
      },
      userId: userId,
    },
    include: {
      user: {
        select: {
          currentQuestionSequence: true,
        },
      },
    },
  });

  if (userSubmissionsForQuestion) {
    redirect(`/end`);
  }

  const question = await db.question.findUnique({
    where: { sequence: questionSequence },
    select: {
      id: true,
      sequence: true,
      question: true,
      hint: true,
    },
  });

  if (!question) {
    throw new Error("No question found");
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="max-w-3xl">
        <h5 className="text-sm font-semibold text-gray-400">
          Question {question?.sequence} / {totalQuestions}
        </h5>
        <h1 className="text-2xl font-medium text-gray-100">
          {question?.question}
        </h1>
        <QuestionForm
          questionSequence={questionSequence}
          userId={userId}
          hint={question?.hint}
        />
      </div>
    </div>
  );
};

export default Question;
