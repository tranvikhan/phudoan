import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

interface IKCardCarouse {
  images?: string[];
  heading?: string;
}
const responsiveConfig = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function KCardCarouse({ images = [], heading }: IKCardCarouse) {
  return (
    <div className="flex flex-col rounded shadow" data-aos="fade-up">
      <Carousel
        ssr
        deviceType={"desktop"}
        responsive={responsiveConfig}
        arrows={false}
        showDots={true}
        autoPlay
        infinite
        autoPlaySpeed={3000}
      >
        {images.map((image, index) => (
          <div key={index} className="block xl:h-96 lg:h-80 h-60 w-full">
            <Image
              src={image ? image : ""}
              alt={heading}
              className="rounded-tl rounded-tr"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkO5heDwADsgGvXBGzcQAAAABJRU5ErkJggg=="
              objectPosition="center"
            />
          </div>
        ))}
      </Carousel>
      <div className="p-6 font-bold text-xl">{heading}</div>
    </div>
  );
}
