import React from "react";
interface IKHeading {
  children?: React.ReactElement | string;
  size?: "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  color?: "text" | "body" | "primary" | "accent" | "header";
  weight?: "bold" | "extrabold";
  uppercase?: boolean;
  id?: string;
}
const KHeading = ({
  children,
  color = "header",
  size = "xl",
  weight = "extrabold",
  uppercase = false,
  id,
}: IKHeading) => {
  return (
    <h2
      id={id}
      data-aos="fade-up"
      className={`text-${color} font-${weight} text-${size}  ${
        uppercase ? "uppercase" : ""
      }`}
    >
      {children}
    </h2>
  );
};
export default KHeading;
