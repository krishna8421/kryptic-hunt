import { convertToInitials } from "@/lib/utils";
import { Fragment } from "react";
import { FaUser } from "react-icons/fa6";
import LogoutButton from "./logout-button";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { FaArrowRight } from "react-icons/fa";

interface NavBarAuthButtonProps {
  isAuthenticated: boolean;
  name?: string | null;
}

const NavBarAuthButton = ({ isAuthenticated, name }: NavBarAuthButtonProps) => {
  if (isAuthenticated) {
    return (
      <Fragment>
        <span className="flex items-center justify-between gap-2">
          <FaUser />
          <span className="hidden md:inline">{name ?? "User"}</span>
          <span className="inline md:hidden">
            {convertToInitials(name ?? "U s e r")}
          </span>
        </span>
        <LogoutButton />
      </Fragment>
    );
  }

  return (
    <div>
      <Link href="/auth/login">
        <Button color="primary" endContent={<FaArrowRight />}>
          Get Started
        </Button>
      </Link>
    </div>
  );
};

export default NavBarAuthButton;
