import { getServerAuthSession } from "@/server/auth";
import { ArrowRightIcon } from "./arrow-right-icon";
import Link from "next/link";
import LogoutButton from "@/components/LogoutButton";

// import { FiBook } from "react-icons/fi";
// import { FaChartColumn } from "react-icons/fa6";

const HomePage = async () => {
  const session = await getServerAuthSession();

  return (
    <main className="mt-24 flex min-h-screen flex-col items-center gap-16">
      <header className="mx-auto w-full max-w-2xl px-4 sm:px-6 lg:px-8">
        <h1 className="bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 bg-clip-text text-center text-7xl font-bold text-transparent">
          Scavenger Hunt MLSA
        </h1>
        <p className="mt-4 text-center text-sm font-medium text-gray-500">
          Click on the arrow to start your quiz journey.
        </p>
      </header>
      <LogoutButton />
      <Link
        className="inline-flex items-center justify-center rounded-full bg-blue-600 p-5 shadow-lg transition-shadow duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
        href={session ? "/q/1" : "/auth/login"}
      >
        <ArrowRightIcon className="h-12 w-12 text-white" />
        <span className="sr-only">Start Quiz</span>
      </Link>
    </main>
  );
};

export default HomePage;
