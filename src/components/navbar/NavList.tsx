import Container from "@/layouts/Container";
import Link from "next/link";
import React from "react";
type Props = {};

function NavList({}: Props) {
  return (
    <Container className="flex justify-between items-center py-8">
      <ul className="flex gap-12">
        <Link href="/">Home</Link>
        <Link href="/explore">Explore</Link>
        <Link href="/spaces">Spaces</Link>
        <Link href="/users">Creators</Link>
      </ul>
      <div>Logo</div>
      <ul className="flex gap-12">
        <Link href="/explore">Login</Link>
        <Link href="/">Github</Link>
        <Link href="/spaces">Twitter</Link>
        <Link href="/users">Buy Me Coffee</Link>
      </ul>
    </Container>
  );
}

export default NavList;
