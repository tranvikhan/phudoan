import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function HighlighCards() {
  const home = useTranslation("home");
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 transform translate-x-2 z-10">
      <div
        className="px-4 lg:px-10 py-8 lg:py-16 flex flex-col items-start space-y-6 transform -translate-x-2 z-10 shadow-lg bg-white"
        data-aos="fade-left"
        data-aos-delay="100"
      >
        <Image
          width={60}
          height={60}
          src="/assets/icon/x50_growth.svg"
          alt={home.t("section1.card1.heading")}
        />
        <h2 className="text-header font-extrabold text-xl lg:w-3/4 w-full">
          {home.t("section1.card1.heading")}
        </h2>
        <p className="text-text font-medium text-base flex-grow">
          {home.t("section1.card1.paragraph")}
        </p>
      </div>
      <div
        className="px-4 lg:px-10 py-8 lg:py-16 flex flex-col items-start space-y-6 shadow-lg transform -translate-x-2 z-10 bg-white"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <Image
          width={60}
          height={60}
          src="/assets/icon/x50_accept.svg"
          alt={home.t("section1.card2.heading")}
        />
        <h2 className="text-header font-extrabold text-xl lg:w-3/4 w-full">
          {home.t("section1.card2.heading")}
        </h2>
        <p className="text-text font-medium text-base flex-grow">
          {home.t("section1.card2.paragraph")}
        </p>
      </div>
      <div
        className="px-4 lg:px-10 py-8 lg:py-16 flex flex-col items-start space-y-6 shadow-lg transform -translate-x-2 z-10 bg-white"
        data-aos="fade-left"
        data-aos-delay="300"
      >
        <Image
          width={60}
          height={60}
          src="/assets/icon/x50_verified.svg"
          alt={home.t("section1.card3.heading")}
        />
        <h2 className="text-header font-extrabold text-xl lg:w-3/4 w-full">
          {home.t("section1.card3.heading")}
        </h2>
        <p className="text-text font-medium text-base flex-grow">
          {home.t("section1.card3.paragraph")}
        </p>
      </div>
      <div
        className="px-4 lg:px-10 py-8 lg:py-16 flex flex-col items-start space-y-6 shadow-lg transform -translate-x-2 z-10 bg-white"
        data-aos="fade-left"
        data-aos-delay="400"
      >
        <Image
          width={60}
          height={60}
          src="/assets/icon/x50_calendar.svg"
          alt={home.t("section1.card4.heading")}
        />
        <h2 className="text-header font-extrabold text-xl lg:w-3/4 w-full">
          {home.t("section1.card4.heading")}
        </h2>
        <p className="text-text font-medium text-base flex-grow">
          {home.t("section1.card4.paragraph")}
        </p>
      </div>
    </section>
  );
}
