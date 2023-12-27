import React from "react";
import { Link } from "gatsby";

import Navbar from "./ui/navbar";

const Header = () => {
  return (
    <header className="sm:flex sm:justify-between py-3 border-b top-0 fixed w-screen bg-white z-50">
      <div className="relative px-16 flex h-16 items-center justify-between w-full">
        <Link to="/">
          <h1 className="text-xl font-bold">DELPHIS</h1>
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
