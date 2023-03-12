import { BsGithub, BsTwitter } from "react-icons/bs";
import { BiCoffeeTogo } from "react-icons/bi";

// primary menu
export const MenuLinks = [
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

// secondary menu
export const SecondaryLinks = [
  {
    to: "/github",
    name: "Github",
    icon: BsGithub,
  },
  {
    to: "/twitter",
    name: "Twitter",
    icon: BsTwitter,
  },
  {
    to: "/bmc",
    name: "Buy Me Coffee",
    icon: BiCoffeeTogo,
  },
];
