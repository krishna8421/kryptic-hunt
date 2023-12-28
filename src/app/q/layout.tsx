import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerAuthSession();
  if (!session) redirect("/auth/login");

  
  // else {
  //   redirect("/q/1");
  // }

  // if (time== ){
  // }
  // console.log(new Date() > new Date("2023-12-29T00:00:00.000Z"))
  // console.log(new Date())

  return <div className="">{children}</div>;
}
