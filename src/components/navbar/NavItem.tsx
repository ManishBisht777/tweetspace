import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons";
type Props = {
  activeLink: string;
  setActiveLink: Dispatch<SetStateAction<string>>;
  menuItem: {
    to: string;
    name: string;
    icon?: IconType;
  };
};

const NavItem = ({ activeLink, setActiveLink, menuItem }: Props) => {
  const isActive = activeLink === menuItem.to;

  return (
    <Link
      className={`px-3 py-1 lg:border-l-0 border-l-2 w-fit flex gap-2 items-center
      ${
        isActive
          ? `border-accent-base text-accent-base`
          : `border-accent-base/50 text-skin-base/50`
      }
      `}
      key={menuItem.name}
      onClick={() => setActiveLink(menuItem.to)}
      href={menuItem.to}
    >
      {menuItem.icon && <menuItem.icon />}
      {menuItem.name}
    </Link>
  );
};

export default NavItem;
