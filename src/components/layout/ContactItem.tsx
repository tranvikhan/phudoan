import Link from "next/link";
import Image from "next/image";
const ContactItem = ({ href, icon, text, size = "large" }: any) => {
  const iconSize = size === "small" ? 14 : 20;
  return (
    <Link href={href}>
      <div
        className={`cursor-pointer text-gray-100 flex  space-x-1 hover:text-opacity-50 transition duration-300 ease-in-out ${
          size === "small" ? "items-center" : "items-start"
        }`}
      >
        {icon ? (
          <img src={icon} alt={text} width={iconSize} height={iconSize} />
        ) : null}
        <span
          className={`font-semibold ${
            size === "small" ? "text-xxs" : "text-sm"
          }`}
        >
          {text}
        </span>
      </div>
    </Link>
  );
};

export default ContactItem;
