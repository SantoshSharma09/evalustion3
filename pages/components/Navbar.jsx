import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div
      style={{ display: "flex", gap: "15px", color: "teal", fontSize: "20px" }}
    >
      <Link href="/">Santosh Shrama</Link>
      <Link href="/Projects">Projects</Link>
      <Link href="/">Experience</Link>
    </div>
  );
};

export default Navbar;
