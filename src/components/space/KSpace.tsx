import React from "react";
interface IKSpace {
  children?: React.ReactElement | any | string;
  directory?: "col" | "row";
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10;
  align?: "center" | "start" | "end";
  justify?: "center" | "between" | "start" | "end";
}
const KSpace = ({
  children,
  directory = "col",
  gap = 0,
  align = "center",
  justify = "center",
}: IKSpace) => {
  return (
    <div
      className={`flex flex-${directory} justify-${justify} items-${align} ${
        directory === "col" ? "space-y-" + gap : "space-x-" + gap
      }`}
    >
      {children}
    </div>
  );
};
export default KSpace;
