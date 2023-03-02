import React, { useState } from "react";
import MobileNav from "./MobileNav";
import NavList from "./NavList";

type Props = {
  isMobile?: boolean;
};

const Navbar = ({ isMobile }: Props) => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  if (isMobile)
    return (
      <div className="text-skin-base font-medium px-4">
        <div className="flex justify-between items-center py-8">
          <button onClick={() => setNavOpen(true)}>Open</button>
          <p>Logo</p>
        </div>
        <MobileNav navOpen={navOpen} setNavOpen={setNavOpen}>
          <NavList />
        </MobileNav>
      </div>
    );

  return (
    <nav className="text-skin-base font-medium">
      <NavList />
    </nav>
  );
};

export default Navbar;
