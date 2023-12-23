import { convertToInitials } from "@/lib/utils";
import { FaUser } from "react-icons/fa6";

interface NavBarAuthButtonProps {
  isAuthenticated: boolean;
  name?: string | null;
}

const NavBarAuthButton = ({ isAuthenticated, name }: NavBarAuthButtonProps) => {
  if (isAuthenticated) {
    return (
      <span className="flex items-center justify-between gap-2">
        <FaUser />
        <span className="hidden md:inline">{name ?? "User"}</span>
        <span className="inline md:hidden">
          {convertToInitials(name ?? "U s e r")}
        </span>
      </span>
    );
  }

  return <div></div>;
};

export default NavBarAuthButton;
