import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import KLinkButton from "../button/KLinkButton";
import KGrid from "../grid/KGrid";
import Container from "../layout/Container";
import Image from "next/image";

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

export interface IKCarouselItem {
  heading: string;
  background: string;
  paragraph: string;
  button: {
    text: string;
    href: string;
  };
}
export interface IKCarousel {
  items?: IKCarouselItem[];
}

const KCarousel = ({ items = [] }: IKCarousel) => (
  <div className="w-full h-80 lg:h-120">
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
      {items.map((item: IKCarouselItem, index: number) => (
        <KCarouselItem {...item} key={index} />
      ))}
    </Carousel>
  </div>
);

const KCarouselItem = ({
  heading,
  paragraph,
  button,
  background,
}: IKCarouselItem) => (
  <div className="relative w-full h-80 lg:h-120 flex justify-center items-center">
    <img
      src={background}
      className="object-cover w-full h-full absolute top-0 left-0 right-0 bottom-0"
      alt="carousel background"
    />

    <div className="z-10 lg:px-0 px-4">
      <Container>
        <KGrid cols={2} gap={10}>
          <KGrid cols={1} gap={5}>
            <div
              className="text-body font-extrabold lg:text-5xl text-3xl"
              data-aos="fade-right"
            >
              {heading}
            </div>
            <div
              className="text-body  lg:text-lg text-md"
              data-aos="fade-right"
            >
              {paragraph}
            </div>
            <KLinkButton href={button.href}>{button.text}</KLinkButton>
          </KGrid>
          <div />
        </KGrid>
      </Container>
    </div>
  </div>
);

export default KCarousel;
