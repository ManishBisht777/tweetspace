import Container from "@/layouts/Container";
import React, { useState } from "react";
import NavItem from "./NavItem";
import { useSession, signIn } from "next-auth/react";
import ProfileIcon from "./ProfileIcon";
import { MenuLinks, SecondaryLinks } from "@/data/menuList";
import { useTheme } from "next-themes";
import { BiSun, BiMoon } from "react-icons/bi";

type Props = {};

function NavList({}: Props) {
  const [activeLink, setActiveLink] = useState<string>("/");
  const { data: session } = useSession();

  const { theme, setTheme } = useTheme();

  return (
    <Container className="lg:flex lg:justify-between lg:p-5 lg:items-center">
      <div>
        <p className=" text-xl font-semibold lg:hidden ">Main Menu</p>
        <ul className="flex flex-col ml-3 mt-3 lg:flex-row lg:gap-8 lg:ml-0 lg:mt-0">
          {MenuLinks.map((menuItem) => (
            <NavItem
              activeLink={activeLink}
              key={menuItem.name}
              setActiveLink={setActiveLink}
              menuItem={menuItem}
            />
          ))}
        </ul>
      </div>
      <img src="/logoNoText.png" className="w-[3rem] hidden lg:flex" alt="" />
      <div className="mt-5 lg:mt-0">
        <p className=" text-xl font-semibold lg:hidden">Others</p>
        <ul className="flex flex-col lg:items-center ml-3 lg:ml-0 mt-3 lg:mt-0 lg:flex-row lg:gap-8">
          {SecondaryLinks.map((menuItem) => (
            <NavItem
              activeLink={activeLink}
              key={menuItem.name}
              setActiveLink={setActiveLink}
              menuItem={menuItem}
            />
          ))}
          <button
            className="text-2xl text-skin-base/80 dark:text-skin-inverted/80"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <BiSun /> : <BiMoon />}
          </button>
          <div className="mt-3 lg:mt-0">
            {session ? (
              <ProfileIcon session={session} />
            ) : (
              <button onClick={() => signIn()}>Sign in</button>
            )}
          </div>
        </ul>
      </div>
    </Container>
  );
}

export default NavList;
