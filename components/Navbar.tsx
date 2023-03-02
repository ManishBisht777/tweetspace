import Link from "next/link";
import React from "react";

type Props = {};

function Navbar({}: Props) {
  return (
    <nav>
      <div>
        <Link href="/">Home</Link>
        <Link href="/explore">Explore</Link>
        <Link href="/spaces">Spaces</Link>
      </div>
      <div></div>
    </nav>
  );
}

export default Navbar;
