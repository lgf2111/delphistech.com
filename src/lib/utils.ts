import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface NavProps {
  title: string;
  to: string;
  description?: string;
  subNavList?: NavProps[];
  button?: boolean;
}

export const navList: NavProps[] = [
  {
    title: "Home",
    to: "#",
    description: "",
  },
  {
    title: "About Us",
    to: "#about",
    description: "",
  },
  {
    title: "Products",
    to: "#product",
    description: "",
    // subNavList: [
    //   {
    //     title: "TMP (Tutor MarketPlace)",
    //     to: "/product/tmp",
    //     description:
    //       "A platform for connecting with certified tutors effortlessly. Our user-friendly interface and free matching service make finding the right tutor a breeze.",
    //   },
    //   {
    //     title: "TMS (Tutoring Management System)",
    //     to: "/product/tms",
    //     description:
    //       "A comprehensive system that helps tutors manage their operations efficiently and effectively. This includes student enrollment, scheduling, and payment tracking.",
    //   },
    // ],
  },
  {
    title: "Blog",
    to: "#blog",
    description: "",
  },
  {
    title: "Contact",
    to: "#contact",
    description: "",
    button: true,
  },
];

export const socialMediaMap = {
  linkedin: "https://www.linkedin.com/company/delphistech",
  facebook: "https://www.facebook.com/delphistech",
  instagram: "https://www.instagram.com/delphistech.social/",
};
