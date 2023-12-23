import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { ReactNode, Suspense } from "react";
import { Providers } from "./providers";
import { Toaster } from "sonner";
import Loader from "@/components/Loader";

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
            {children}
            <Toaster />
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
