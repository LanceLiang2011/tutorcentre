import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import { loadTranslation } from "@/lib/i18n";
import { Navbar } from "@/components/navigations/navbar";
import { LangParams } from "@/types";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: LangParams;
}>) {
  const allContents = await loadTranslation(params.lang);
  const navbarContents = allContents["navbar"];
  return (
    <html lang={params.lang} data-theme="night">
      <body className={inter.className}>
        <div className=" max-w-full mx-auto text-background">
          <header className="z-10 flex w-full justify-stretch">
            <Navbar lang={navbarContents.lang} navs={navbarContents.navs} />
          </header>
          <main className=" z-0">{children}</main>
          <footer></footer>
        </div>
      </body>
    </html>
  );
}
