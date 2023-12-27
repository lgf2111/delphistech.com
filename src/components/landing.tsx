import React from "react";

import { Button } from "./ui/button";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Landing = () => {
  return (
    <main className="mx-16 h-screen flex" id="landing">
      <div className="my-auto">
        <div className="my-20 sm:my-0"></div>
        <div className="flex flex-col sm:flex-row my-auto">
          <div className="my-auto">
            <div className="mb-10">
              <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
                Empowering Education, Simplifying Success
              </h1>
              <p className="leading-7 [&:not(:first-child)]:mt-6 mb-5">
                We help you scale your tuition business with technology
              </p>
              <Link to="#contact">
                <Button>Talk To Us</Button>
              </Link>
            </div>
          </div>
          <div className="">
            <StaticImage
              src="../images/landing.png"
              alt="Landing Image"
              placeholder="none"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Landing;
