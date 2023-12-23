import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { ReactNode, Suspense } from "react";
import { Providers } from "./providers";
import { Toaster } from "sonner";
import Loader from "@/components/Loader";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Kryptic Hunt | MLSA KIIT Chapter",
  description: "A Fun Kryptic Hunt Game by MLSA KIIT Chapter",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.className}`}>
        <Suspense fallback={<Loader />}>
          <Providers>
            <div className="flex min-h-screen flex-col">
              <NavBar />
              <div className="flex-grow">{children}</div>
              <Footer />
            </div>
            <Toaster />
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
