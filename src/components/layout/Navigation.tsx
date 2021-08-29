import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import PhoneContact from "./PhoneContact";

export default function Navigation({ isVisible = true }: any) {
  return (
    <nav
      className={`bg-body lg:w-auto w-full flex flex-col justify-between items-center lg:relative fixed top-0  lg:h-auto h-full  lg:py-0 py-16 lg:z-auto z-40  ${
        isVisible ? "right-0" : "-right-96"
      } transition duration-500 ease-in-out`}
    >
      <ul className="flex lg:space-x-4 lg:space-y-0 space-y-10 lg:flex-row flex-col lg:items-start items-center lg:pt-0 pt-8">
        <NavItem href="/about" title={"Giới thiệu"} />
        <NavItem href="/services" title={"Dịch Vụ"} />
        <NavItem href="/facilities" title={"Trang Thiết Bị"} />
      </ul>
      <div className="lg:hidden flex">
        <PhoneContact />
      </div>
    </nav>
  );
}
const NavItem = ({ href, title }: any) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  return (
    <li>
      <Link href={href}>
        <div
          className={`p-3 cursor-pointer uppercase text-base  font-bold hover:text-primary transition duration-300 ease-in-out flex flex-col ${
            isActive ? "text-primary" : "text-header"
          }`}
        >
          <span className="leading-5">{title}</span>
          <div
            className={`w-full border-b-2  ${
              isActive ? "border-primary" : "border-transparent"
            }`}
          />
        </div>
      </Link>
    </li>
  );
};
