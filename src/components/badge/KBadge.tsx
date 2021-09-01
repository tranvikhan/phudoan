import React from "react";

interface IKBadge {
  children?: React.ReactElement | string;
  block?: boolean;
}
const KBadge = ({ children, block = false }: IKBadge) => {
  return (
    <div
      data-aos="flip-up"
      className={`${
        block ? "w-full" : ""
      }  px-8 py-6 shadow-xl text-primary font-bold text-lg border-l-4 border-primary flex items-center justify-start`}
    >
      {children}
    </div>
  );
};
export default KBadge;
