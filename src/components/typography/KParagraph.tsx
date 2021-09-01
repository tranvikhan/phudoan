import React from "react";
interface IKParagraph {
  children?: React.ReactElement | string;
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl";
  color?: "text" | "body" | "primary" | "accent" | "header";
}
const KParagraph = ({
  children,
  color = "text",
  size = "base",
}: IKParagraph) => {
  return (
    <p data-aos="fade-up" className={`text-${color} font-medium text-${size}`}>
      {children}
    </p>
  );
};
export default KParagraph;
