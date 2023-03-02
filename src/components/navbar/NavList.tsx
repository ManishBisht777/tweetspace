import Container from "@/layouts/Container";
import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";

const MenuLinks = [
  {
    to: "/",
    name: "Home",
  },
  {
    to: "/explore",
    name: "Explore",
  },
  {
    to: "/creators",
    name: "Creators",
  },
  {
    to: "/spaces",
    name: "Spaces",
  },
];

const SecondaryLinks = [
  {
    to: "/login",
    name: "Login",
  },
  {
    to: "/github",
    name: "Github",
  },
  {
    to: "/twitter",
    name: "Twitter",
  },
  {
    to: "/bmc",
    name: "Buy Me Coffee",
  },
];

type Props = {};

function NavList({}: Props) {
  const [activeLink, setActiveLink] = useState<string>("/");

  return (
    <Container className="md:flex md:justify-between md:p-5 md:items-center">
      <div>
        <p className=" text-xl font-semibold md:hidden ">Main Menu</p>
        <ul className="flex flex-col ml-3 mt-3 md:flex-row md:gap-8 md:ml-0 md:mt-0">
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
      <div className="hidden md:block">Logo</div>
      <div className="mt-5 md:mt-0">
        <p className=" text-xl font-semibold md:hidden">Secondary Menu</p>
        <ul className="flex flex-col ml-3 md:ml-0 mt-3 md:mt-0 md:flex-row md:gap-8">
          {SecondaryLinks.map((menuItem) => (
            <NavItem
              activeLink={activeLink}
              key={menuItem.name}
              setActiveLink={setActiveLink}
              menuItem={menuItem}
            />
          ))}
        </ul>
      </div>
    </Container>
  );
}

export default NavList;
