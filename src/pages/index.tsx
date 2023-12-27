import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Header from "@/components/header";
import Landing from "@/components/landing";
import Products from "@/components/ui/product";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import { Toaster } from "@/components/ui/toaster";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="scroll-smooth">
      <Header />
      <Landing />
      <Products />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>DELPHIS</title>;
