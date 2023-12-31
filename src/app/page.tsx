import { getServerAuthSession } from "@/server/auth";
import { ArrowRightIcon } from "./arrow-right-icon";
import Link from "next/link";

const HomePage = async () => {
  const session = await getServerAuthSession();

  return (
    <main className="mt-28 flex flex-col items-center gap-16">
      <header className="mx-auto w-full max-w-2xl px-4 sm:px-6 lg:px-8">
        <h1 className="bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 bg-clip-text text-center text-7xl font-bold text-transparent">
          Kryptic Hunt MLSA
        </h1>
        <p className="mt-4 text-center text-sm font-medium text-gray-500">          
        </p>
      </header>
      <Link
        className="inline-flex items-center justify-center rounded-full bg-blue-600 p-5 shadow-lg transition-shadow duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
        href={session ? "/q/1" : "/auth/login"}
      >
        <ArrowRightIcon className="h-10 w-10 text-white" />
        <span className="sr-only">Enter</span>
      </Link>
      <h3 className="text-3xl font-semibold text-gray-300">
        ...The Hunt has Concluded
      </h3>
      
    </main>
  );
};

export default HomePage;
