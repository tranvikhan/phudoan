import React from "react";
import Container from "./Container";
import Header from "./Header";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "./Footer";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      <Carousel
        responsive={responsive}
        arrows={false}
        showDots={true}
        autoPlay
        infinite
        autoPlaySpeed={500}
      >
        <div className="w-full h-96 bg-red-500 p-8">Item 1</div>
        <div className="w-full h-96 bg-blue-500 p-8">Item 1</div>
        <div className="w-full h-96 bg-green-500 p-8">Item 1</div>
        <div className="w-full h-96 bg-yellow-500 p-8">Item 1</div>
        <div className="w-full h-96 bg-purple-500 p-8">Item 1</div>
      </Carousel>
      <Container>{children}</Container>
      <Footer />
    </>
  );
}
