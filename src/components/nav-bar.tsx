import Link from "next/link";
import { FiBook } from "react-icons/fi";
import { FaChartColumn } from "react-icons/fa6";
import Image from "next/image";
import { getServerAuthSession } from "@/server/auth";
import NavBarAuthButton from "./nav-bar-auth-button";

const NavBar = async () => {
  const session = await getServerAuthSession();
  return (
    <nav className="flex items-center justify-between p-4 px-6">
      <span className="flex select-none items-center justify-between gap-4 text-xl font-semibold">
        <Image
          src="/mlsa-logo.png"
          width={40}
          height={40}
          alt="MLSA Logo"
          priority={true}
          quality={100}
        />
        <span className="md:inline hidden">Kryptic Hunt</span>
        
      </span>
      <ul className="flex items-center justify-between gap-6 text-gray-300">
        <Link href="/rules">
          <li className="flex items-center justify-center gap-2 hover:text-gray-100 hover:underline">
            <FiBook />
            Rules
          </li>
        </Link>
        <Link href="/leaderboard">
          <li className="flex items-center justify-center gap-2 hover:text-gray-100 hover:underline">
            <FaChartColumn />
            Leaderboard
          </li>
        </Link>
        <li></li>
      </ul>
      <div>
        <NavBarAuthButton isAuthenticated={session ? true : false} name={session?.user?.name} />
      </div>
    </nav>
  );
};

export default NavBar;
