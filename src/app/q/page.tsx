import dynamic from "next/dynamic";

const CountdownBoxNoSSR = dynamic(() => import("./countdown-box"), {
  ssr: false,
});

const QuizPage = () => {
  return (
    <div className="flex flex-col gap-8 min-h-screen items-center justify-center px-2">
      <h1 className="text-6xl text-center">This Quiz will begin on 26th Dec 2023</h1>
      <CountdownBoxNoSSR />
    </div>
  );
};

export default QuizPage;
