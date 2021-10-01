import React from "react";
import Image from "next/image";

interface IKCard {
  type?:
    | "overlay"
    | "default1"
    | "default2"
    | "logo"
    | "image"
    | "partner"
    | "leader";
  image?: string;
  heading?: string;
  paragraph?: string;
  priority?: boolean;
}
export default function KCard({ type, image, heading, paragraph }: IKCard) {
  if (type === "overlay")
    return (
      <div className="w-full h-40 relative" data-aos="fade-up">
        <Image
          src={image ? image : ""}
          alt={heading}
          layout="fill"
          objectFit="cover"
          loading="eager"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkO5heDwADsgGvXBGzcQAAAABJRU5ErkJggg=="
          objectPosition="center"
        />
        <div className="absolute top-0 w-full h-full left-0 flex items-center justify-center uppercase font-bold text-xl text-white text-center 2xl:px-24 md:px-8 px-6">
          {heading}
        </div>
      </div>
    );
  if (type === "default1") {
    return (
      <div className="flex flex-col rounded shadow" data-aos="fade-up">
        <img
          width={550}
          height={340}
          src={image ? image : ""}
          alt={heading}
          className="object-cover xl:h-96 lg:h-80 h-60 w-full rounded-tl rounded-tr"
          placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkO5heDwADsgGvXBGzcQAAAABJRU5ErkJggg=="
        />
        <div className="p-6 font-bold text-xl">{heading}</div>
      </div>
    );
  }
  if (type === "default2") {
    return (
      <div className="flex flex-col rounded shadow" data-aos="fade-up">
        <img
          width={640}
          height={480}
          src={image ? image : ""}
          alt={heading}
          className="object-cover 2xl:h-60 xl:h-52 lg:h-40 h-60 w-full rounded-tl rounded-tr"
          placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkO5heDwADsgGvXBGzcQAAAABJRU5ErkJggg=="
        />
        <div className="p-6 font-bold text-xl">{heading}</div>
      </div>
    );
  }
  if (type === "logo") {
    return (
      <div className="rounded shadow w-full p-4" data-aos="flip-left">
        <img
          width={344}
          height={240}
          src={image ? image : ""}
          alt={heading}
          className="object-cover w-full"
          placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkO5heDwADsgGvXBGzcQAAAABJRU5ErkJggg=="
        />
      </div>
    );
  }
  if (type === "partner") {
    return (
      <div className="flex flex-col rounded shadow p-6" data-aos="fade-up">
        <div>
          <img
            src={image ? image : ""}
            alt={heading}
            width={120}
            height={100}
            placeholder="blur"
          />
        </div>

        <div className="font-bold text-xl">{heading}</div>
      </div>
    );
  }
  if (type === "leader") {
    return (
      <div className="flex flex-col rounded shadow" data-aos="fade-up">
        <img
          src={image ? image : ""}
          alt={heading}
          width={360}
          height={300}
          placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkO5heDwADsgGvXBGzcQAAAABJRU5ErkJggg=="
          className="object-cover xl:h-96 lg:h-80 h-60 w-full rounded-tl rounded-tr"
        />

        <div className="p-6 flex flex-col space-y-2">
          <div className="font-bold text-xl">{heading}</div>
          <div className="text-primary font-medium text-lg">{paragraph}</div>
        </div>
      </div>
    );
  }
  return (
    <div
      className="w-full xl:h-64 lg:52 h-40 relative block"
      data-aos="fade-up"
    >
      <Image
        src={image ? image : ""}
        alt={heading}
        layout="fill"
        objectFit="cover"
        loading="eager"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkO5heDwADsgGvXBGzcQAAAABJRU5ErkJggg=="
        objectPosition="center"
      />
    </div>
  );
}
