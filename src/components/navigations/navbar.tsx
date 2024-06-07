"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Nav } from "@/types";

interface Props {
  lang: "en" | "zh";
  navs: Nav[];
}

export function Navbar({ lang, navs }: Props) {
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null);
  const router = useRouter();
  const currentPath = usePathname();

  const handleLanguageSwitch = () => {
    let newPath;

    if (currentPath.startsWith("/en")) {
      newPath = currentPath.replace("/en", "/zh");
    } else if (currentPath.startsWith("/zh")) {
      newPath = currentPath.replace("/zh", "/en");
    } else {
      newPath = lang === "en" ? `/zh${currentPath}` : `/en${currentPath}`;
    }

    router.push(newPath);
  };

  return (
    <>
      <nav className=" w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center justify-center mr-auto space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="hidden md:block self-center text-2xl font-semibold whitespace-nowrap ">
              Denison Tutoring
            </span>
          </Link>
          {/* Desktop */}
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-default"
            onMouseLeave={() => setHoveredNavItem(null)}
          >
            <ul className="flex gap-8 p-4 md:p-0 mt-4 text-xl">
              {navs.map((nav) => (
                <li key={nav.link} className="hover:text-blue-400 relative">
                  {hoveredNavItem === nav.name && (
                    <motion.div
                      layoutId="hovered-backdrop"
                      className="absolute h-20 w-20"
                    >
                      <img
                        className=" w-full h-full translate-y-4 object-fill"
                        alt="rocket doge"
                        src="images/clown-dog-internet-doge.gif"
                      />
                    </motion.div>
                  )}
                  <Link
                    href={nav.link}
                    className="block py-2 px-3 rounded md:bg-transparent  md:p-0 "
                    aria-current="page"
                    onMouseEnter={() => setHoveredNavItem(nav.name)}
                  >
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Mobile */}
          <Sheet>
            <SheetTrigger className="block md:hidden">
              <Menu />
            </SheetTrigger>
            <SheetContent side={"left"}>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          {/* Lang */}
          <div className="ml-4 bg-blue-700 py-1 px-2 md:py-2 md:px-4 rounded-xl md:translate-y-2 hover:bg-blue-800 transition-colors">
            <button
              className="text-white md:text-xl"
              onClick={handleLanguageSwitch}
            >
              {lang === "en" ? "中文" : "English"}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
