import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navLeft">
        <Link className="navLink" href="/about">
          О нас
        </Link>
        <Link className="navLink" href="/contact">
          Контакты
        </Link>
        <Link className="navLink" href="/contact">
          Контакты
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
