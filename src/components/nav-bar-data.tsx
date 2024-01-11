"use client";

import { useState } from "react";
import { convertToInitials } from "@/lib/utils";
import { Fragment } from "react";
import { FaUser } from "react-icons/fa6";
import LogoutButton from "./logout-button";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarItem,
  Link,
  Button,
  NavbarMenuItem,
  NavbarMenu,
} from "@nextui-org/react";
import { FiBook } from "react-icons/fi";
import { FaChartColumn } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NextLink from "next/link";

interface NavBarDataProps {
  isAuthenticated: boolean;
  name?: string | null;
}

const NavBarData = ({ isAuthenticated, name }: NavBarDataProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();

  const menuItems = [
    {
      name: "Guide",
      link: "/rules",
    },
    {
      name: "Leaderboard",
      link: "/leaderboard",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Socials",
      link: "https://linktr.ee/mlsakiit",
    },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image
            src="/mlsa-logo.png"
            width={40}
            height={40}
            alt="MLSA Logo"
            priority={true}
            quality={100}
          />
          <NextLink color="foreground" href="/">
            <p className="ml-2 select-none font-bold text-inherit">
              Kryptic Hunt
            </p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem isActive={path.split("/")[1] === "rules"}>
          <Link color="foreground" href="/rules">
            <span className="flex items-center justify-center gap-2 hover:text-gray-100 hover:underline">
              <FiBook />
              Guide
            </span>
          </Link>
        </NavbarItem>
        <NavbarItem isActive={path.split("/")[1] === "leaderboard"}>
          <Link color="foreground" href="/leaderboard">
            <span className="flex items-center justify-center gap-2 hover:text-gray-100 hover:underline">
              <FaChartColumn />
              Leaderboard
            </span>
          </Link>
        </NavbarItem>
        <NavbarItem isActive={path.split("/")[1] === "about"}>
          <Link color="foreground" href="/about">
            <span className="flex items-center justify-center gap-2 hover:text-gray-100 hover:underline">
              <FaRegQuestionCircle />
              About
            </span>
          </Link>
        </NavbarItem>
        <NavbarItem isActive={path.split("/")[1] === "Socials"}>
          <Link
            color="foreground"
            href="https://linktr.ee/mlsakiit"
            target="__blank"
          >
            <span className="flex items-center justify-center gap-2 hover:text-gray-100 hover:underline">
              <FaUser></FaUser>
              Socials
            </span>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        {isAuthenticated && (
          <Fragment>
            <NavbarItem>
              <span className="flex items-center justify-between gap-2">
                <FaUser />
                <span className="hidden md:inline">{name ?? "User"}</span>
                <span className="inline md:hidden">
                  {convertToInitials(name ?? "U s e r")}
                </span>
              </span>
            </NavbarItem>
            <NavbarItem>
              <LogoutButton />
            </NavbarItem>
          </Fragment>
        )}
        {!isAuthenticated && (
          <Fragment>
            <NavbarItem className="hidden lg:flex">
              <Link href="/auth/login">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button
                as={Link}
                color="primary"
                href="/auth/register"
                variant="flat"
              >
                Sign Up
              </Button>
            </NavbarItem>
          </Fragment>
        )}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              color={"foreground"}
              className="w-full hover:underline"
              href={item.link}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBarData;
