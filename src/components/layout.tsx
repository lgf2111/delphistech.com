import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="scroll-smooth">{children}</div>;
};

export default Layout;
