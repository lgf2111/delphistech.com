import { Link } from "gatsby";
import React, { ReactElement } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./navigation-menu";
import { Button } from "./button";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { Menu } from "lucide-react";
import { NavProps, navList } from "@/lib/utils";

const renderNav = (nav: NavProps, sheet?: Boolean) => {
  let element: ReactElement;
  if (sheet) {
    element = (
      <Link to={nav.to} className="hover:underline">
        {nav.title}
      </Link>
    );
    return element;
  } else if (nav.subNavList) {
    element = (
      <>
        <NavigationMenuTrigger>{nav.title}</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px]">
            {nav.subNavList.map((subNav) => renderSubNav(subNav))}
          </ul>
        </NavigationMenuContent>
      </>
    );
  } else if (nav.button) {
    element = (
      <Button className="ms-5" variant="outline">
        {nav.title}
      </Button>
    );
  } else {
    element = (
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        {nav.title}
      </NavigationMenuLink>
    );
  }
  return (
    <NavigationMenuItem>
      <Link to={nav.to}>{element}</Link>
    </NavigationMenuItem>
  );
};

const renderSubNav = (nav: NavProps) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
          <div className="text-sm font-medium leading-none">{nav.title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {nav.description}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};

const Navbar = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Menu className="h-6 md:hidden w-6" />
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <nav className="flex flex-col gap-4">
            {navList.map((nav) => renderNav(nav, true))}
          </nav>
        </SheetContent>
      </Sheet>
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList>
          {navList.map((nav) => renderNav(nav))}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default Navbar;
