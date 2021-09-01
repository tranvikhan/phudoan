import React from "react";
interface IKGrid {
  children?: React.ReactElement | any | string;
  cols: 1 | 2 | 3 | 4 | 5;
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10;
  responsive?: boolean;
}
const KGrid = ({ children, cols, gap = 0, responsive = true }: IKGrid) => {
  const getColsClass = (cols: number) => {
    let colsClass;
    switch (cols) {
      case 1:
        colsClass = "grid-cols-1";
        break;
      case 2:
        colsClass = "grid-cols-1 lg:grid-cols-2";
        break;
      case 3:
        colsClass = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
        break;
      case 4:
        colsClass = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
        break;
      case 5:
        colsClass = "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5";
        break;
      default:
        colsClass = "grid-cols-1 lg:grid-cols-2";
    }
    return colsClass;
  };
  return (
    <div
      className={`grid w-full ${
        responsive ? getColsClass(cols) : "grid-cols-" + cols
      } gap-${gap}`}
    >
      {children}
    </div>
  );
};
export default KGrid;
