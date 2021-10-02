import React from "react";
import "react-multi-carousel/lib/styles.css";
import Container from "../layout/Container";
import Image from "next/image";

interface IKWallpaper {
  background: string;
  text: string;
}

const KWallpaper = ({ background, text = "" }: IKWallpaper) => (
  <div className="relative w-full lg:h-80 h-36 block">
    <img
      src={background}
      className="object-cover w-full lg:h-80 h-36 absolute top-0 left-0 right-0 bottom-0"
      alt="wallpaper background"
    />
    <div className="z-10 absolute top-0 left-0 lg:h-80 h-36 w-full flex items-center justify-center">
      <Container>
        <div
          className="text-body font-extrabold lg:text-5xl text-3xl"
          data-aos="zoom-out"
        >
          {text}
        </div>
      </Container>
    </div>
  </div>
);

export default KWallpaper;
