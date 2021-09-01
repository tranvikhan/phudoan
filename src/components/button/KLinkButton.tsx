import Link from "next/link";

interface IKLinkButton {
  children?: React.ReactElement | string;
  href?: string;
  block?: boolean;
}
const KLinkButton = ({ children, href = "/", block = false }: IKLinkButton) => {
  return (
    <div className={`${!block ? "flex" : ""}`} data-aos="zoom-out">
      <Link href={href}>
        <div className="text-bold text-base py-3 px-4 shadow-xl w-auto text-body bg-primary uppercase rounded cursor-pointer hover:bg-opacity-90 transition duration-300 ease-in-out">
          {children}
        </div>
      </Link>
    </div>
  );
};
export default KLinkButton;
