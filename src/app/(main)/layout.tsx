import Footer from "@/components/footer";
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
      <Footer />
    </div>
  );
}
