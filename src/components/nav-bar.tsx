import { getServerAuthSession } from "@/server/auth";
import NavBarData from "./nav-bar-data";

const NavBar = async () => {
  const session = await getServerAuthSession();

  return (
    <NavBarData
      isAuthenticated={session ? true : false}
      name={session?.user?.name}
    />
  );
};

export default NavBar;
