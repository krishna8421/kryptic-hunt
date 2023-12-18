import dynamic from "next/dynamic";

const CountdownBoxNoSSR = dynamic(() => import("./countdown-box"), {
  ssr: false,
});

const QuizPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <CountdownBoxNoSSR />
    </div>
  );
};

export default QuizPage;
