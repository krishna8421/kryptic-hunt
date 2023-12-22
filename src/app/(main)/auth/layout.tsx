import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerAuthSession();
  if (session) redirect("/q");

  return <div className="flex flex-col items-center">{children}</div>;
}
