import Image from "next/image";
import Link from "next/link";
const PhoneContact = () => (
  <div className="flex items-center space-x-2">
    <Image src="/assets/icon/x32_Chat.svg" width={32} height={28} />
    <div className="flex flex-col">
      <h6 className="text-text font-semibold text-xs">Liên hệ để hợp tác</h6>
      <Link href="tel:+84 909191494">
        <h5 className="text-primary font-semibold text-lg cursor-pointer">
          0909.191.494
        </h5>
      </Link>
    </div>
  </div>
);

export default PhoneContact;
