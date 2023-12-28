import dynamic from "next/dynamic";
import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";

const CountdownBoxNoSSR = dynamic(() => import("./countdown-box"), {
  ssr: false,
});

const QuizPage = async () => {
  const session = await getServerAuthSession();
  const options = {
    timeZone: "Asia/Kolkata",
    hour12: false,
  };
  const currentDate = new Date();
  const istTimeLimit = new Date("2023-12-29T00:00:00.000Z").toLocaleString(
    "en-US",
    options,
  );
  const istTimeCurrent = currentDate.toLocaleString("en-US", options);

  if (session && istTimeCurrent > istTimeLimit) {
    redirect("/q/1");
  }

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
