import React, { useState } from "react";
import MobileNav from "./MobileNav";
import NavList from "./NavList";
import { GiHamburgerMenu } from "react-icons/gi";

type Props = {
  isMobile?: boolean;
};

const Navbar = ({ isMobile }: Props) => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  if (isMobile)
    return (
      <div className="text-skin-base px-4">
        <div className="flex justify-between items-center py-8">
          <button className="text-2xl" onClick={() => setNavOpen(true)}>
            <GiHamburgerMenu className="dark:text-skin-inverted" />
          </button>
          <img className="w-10" src="/logoNoText.png" alt="tweetspace logo" />
        </div>
        <MobileNav navOpen={navOpen} setNavOpen={setNavOpen}>
          <NavList />
        </MobileNav>
      </div>
    );

  return (
    <nav className="text-skin-base">
      <NavList />
    </nav>
  );
};

export default Navbar;
