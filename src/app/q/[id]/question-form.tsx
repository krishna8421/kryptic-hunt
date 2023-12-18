"use client";

import { Button, Input } from "@nextui-org/react";
import { AiOutlineEnter } from "react-icons/ai";
// import { useFormState } from "react-dom";
import { submitAnswer } from "./actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface IQuestionFormProps {
  questionSequence: number;
  userId: string;
  isEnd: boolean;
}

const QuestionForm = ({
  questionSequence,
  userId,
  isEnd,
}: IQuestionFormProps) => {
  const router = useRouter();
  const onSubmitAnswer = async (formData: FormData) => {
    const res = await submitAnswer({ formData, questionSequence, userId });

    if (!res.success) {
      toast.error(res.message);
      return;
    }

    toast.success(res.message);

    if (isEnd) {
      router.push(`/end`);
      return;
    }
    router.push(`/q/${questionSequence + 1}`);
  };

  return (
    <form action={onSubmitAnswer}>
      <Input
        name="answer"
        inputMode="text"
        placeholder="Enter your answer"
        className="mt-4 w-full"
        variant="underlined"
        endContent={<AiOutlineEnter className="" />}
      />
      <input type="submit" hidden />
      <div className="mt-4">
        <Button color="success" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default QuestionForm;
