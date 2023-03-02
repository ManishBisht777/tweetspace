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
    <Container>
      <div>
        <p className=" text-xl font-semibold">Main Menu</p>
        <ul className="flex flex-col ml-3 mt-3">
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
      <div className="hidden">Logo</div>
      <div className="mt-5">
        <p className=" text-xl font-semibold">Secondary Menu</p>
        <ul className="flex flex-col ml-3 mt-3">
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
