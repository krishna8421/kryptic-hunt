// import { getServerAuthSession } from "@/server/auth";
// import { redirect } from "next/navigation";
import NavBar from "@/components/nav-bar";
import { ReactNode } from "react";

export default async function MainLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="">
      <NavBar />
      {children}
    </div>
  );
}
