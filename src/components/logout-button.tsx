"use client";

import { signOut } from "next-auth/react";
import { AiOutlineLogout } from "react-icons/ai";

const LogoutButton = () => {
  return (
    <AiOutlineLogout
      onClick={() => {
        signOut();
      }}
      className="cursor-pointer text-red-500"
    />
  );
};

export default LogoutButton;
