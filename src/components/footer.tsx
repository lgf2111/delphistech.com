import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { socialMediaMap } from "@/lib/utils";

const Footer = () => {
  return (
    <footer
      className="bg-black text-white dark:bg-gray-900 px-16 pt-8 pb-4"
      id="footer"
    >
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            {/* TODO: ADD DELPHIS LOGO */}
            {/* <img src="" className="h-8" alt="Delphis Logo" /> */}
            <h1 className="text-xl font-bold mx-auto sm:mx-0">DELPHIS</h1>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-100 sm:mb-0 dark:text-gray-500 gap-x-3 justify-center">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#product" className="hover:underline">
                Product
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-500 sm:mx-auto dark:border-gray-200 lg:my-8" />
        <div className="sm:flex items-center">
          <span className="block text-sm text-gray-100 dark:text-gray-400 text-center">
            © 2023 Delphis Pte Ltd. All rights reserved
          </span>
          <div className="sm:ms-auto flex gap-x-2 mt-2 sm:mt-0 justify-center">
            <a href={socialMediaMap.linkedin}>
              <Linkedin className="w-6 h-6 text-gray-300 hover:text-gray-100 dark:hover:text-gray-500" />
            </a>
            <a href={socialMediaMap.facebook}>
              <Facebook className="w-6 h-6 text-gray-300 hover:text-gray-100 dark:hover:text-gray-500" />
            </a>
            <a href={socialMediaMap.instagram}>
              <Instagram className="w-6 h-6 text-gray-300 hover:text-gray-100 dark:hover:text-gray-500" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
