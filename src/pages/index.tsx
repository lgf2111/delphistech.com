import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Header from "@/components/header";
import Landing from "@/components/landing";
import Products from "@/components/ui/product";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import { Toaster } from "@/components/ui/toaster";
import Layout from "@/components/layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Header />
      <Landing />
      <Products />
      <Contact />
      <Footer />
      <Toaster />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>DELPHIS</title>;
