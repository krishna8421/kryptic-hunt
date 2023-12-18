"use client";

import { Button } from "@nextui-org/react";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <div>
      <Button
        onClick={() => {
          signOut();
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default LogoutButton;
