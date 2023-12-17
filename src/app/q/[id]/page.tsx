import { db } from "@/server/db";
import Link from "next/link";
import questions from "@/../prisma/data/questions.json"

const Question = async ({ params }: { params: { id: string } }) => {
    const totalQuestions = questions.length;

  const questionSequence = Number(params.id);
  if (Number.isNaN(questionSequence)) {
    throw new Error("invalid id");
  }

  const question = await db.question.findUnique({
    where: { sequence: questionSequence },
  });


  return (
    <div>
      <h5 className="text-sm font-semibold text-gray-400">Question {question?.sequence} / totalQuestions</h5>
      <h1 className="text-2xl font-medium text-gray-100">{question?.question}</h1>


    </div>
  );
};

export default Question;
