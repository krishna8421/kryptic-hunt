import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { ReactNode } from "react";
import { Providers } from "./providers";
import { Toaster } from "sonner";

export const metadata = {
  title: "Kryptic Hunt | MLSA KIIT Chapter",
  description: "A Fun Kryptic Hunt Game by MLSA KIIT Chapter",
  // icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.className}`}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
