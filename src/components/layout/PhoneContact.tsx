import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
const PhoneContact = () => {
  const common = useTranslation("common");
  return (
    <div className="flex items-center space-x-2">
      <Image
        src="/assets/icon/x32_Chat.svg"
        width={32}
        height={28}
        priority
        alt="Phone"
      />
      <div className="flex flex-col">
        <h6 className="text-text font-semibold text-xs">
          {common.t("header.contact.header")}
        </h6>
        <Link href="tel:+84 909191494">
          <h5 className="text-primary font-semibold text-lg cursor-pointer">
            {common.t("header.contact.phoneNumber")}
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default PhoneContact;
