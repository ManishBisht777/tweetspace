import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
type Props = {
  activeLink: string;
  setActiveLink: Dispatch<SetStateAction<string>>;
  menuItem: {
    to: string;
    name: string;
  };
};

const NavItem = ({ activeLink, setActiveLink, menuItem }: Props) => {
  const isActive = activeLink === menuItem.to;

  return (
    <Link
      className={`px-3 py-1 lg:border-l-0 border-l-2 w-fit
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
      {menuItem.name}
    </Link>
  );
};

export default NavItem;
