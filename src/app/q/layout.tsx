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

  return (
    <div className="flex min-h-screen items-center justify-center">
      {children}
    </div>
  );
}
