interface IContainer {
  children?: React.ReactNode;
  className?: string;
}
export default function Container({ children, className }: IContainer) {
  return (
    <div
      className={`container mx-auto xl:px-16 lg:px-6 px-4 py-2 ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
}
