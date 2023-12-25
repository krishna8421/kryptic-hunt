import dynamic from "next/dynamic";

const CountdownBoxNoSSR = dynamic(() => import("./countdown-box"), {
  ssr: false,
});

const QuizPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-2">
      <h1 className="text-center text-6xl">
        Hunt begins on 29th December, 12:00 am
      </h1>
      <CountdownBoxNoSSR />
    </div>
  );
};

export default QuizPage;
