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
      <div className="hidden lg:block">Logo</div>
      <div className="mt-5 lg:mt-0">
        <p className=" text-xl font-semibold lg:hidden">Secondary Menu</p>
        <ul className="flex flex-col ml-3 lg:ml-0 mt-3 lg:mt-0 lg:flex-row lg:gap-8">
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
