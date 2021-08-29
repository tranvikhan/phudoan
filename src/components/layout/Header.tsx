import React, { useEffect, useState } from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import ChangeLang from "./ChangeLang";
import Navigation from "./Navigation";
import PhoneContact from "./PhoneContact";
import { useWindowScroll, useWindowSize } from "react-use";
import SubHeader from "./SubHeader";

export default function Header() {
  const [showNav, setShowNav] = useState(true);
  const { width } = useWindowSize();
  const { y } = useWindowScroll();
  useEffect(() => {
    if (width && width < 1024) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }, [width]);
  return (
    <div className="z-50">
      <SubHeader />
      <Container>
        <div className="flex justify-between items-center flex-wrap ">
          {/*   Left Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer z-50">
              <Image src="/assets/icon/Logo.svg" width={44} height={44} />
              <h1 className="uppercase text-primary font-roboto font-black text-lg">
                PHÚ ĐOÀN
              </h1>
            </div>
          </Link>
          {/* Center navigation */}
          <Navigation isVisible={showNav} />
          {/*  Right */}
          <div className="flex items-center space-x-4">
            {/*  Contact */}
            <div className="lg:flex hidden">
              <PhoneContact />
            </div>
            {/*   Change Language */}
            <ChangeLang />
          </div>
          <div
            className="w-8 h-8 lg:hidden relative cursor-pointer z-50 rounded-lg"
            onClick={() => {
              setShowNav(!showNav);
            }}
          >
            <Image src="/assets/icon/x32_menu.svg" width={32} height={32} />
          </div>
        </div>
      </Container>
    </div>
  );
}
