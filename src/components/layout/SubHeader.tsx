import React from "react";
import Container from "./Container";

import ContactItem from "./ContactItem";
import { useTranslation } from "next-i18next";

export default function SubHeader() {
  const common = useTranslation("common");
  return (
    <div className="bg-primary w-full lg:block hidden">
      <Container>
        <div className="flex items-center justify-between">
          <h6 className="text-xs text-gray-100 font-semibold">
            {common.t("subHeader.siteName")}
          </h6>
          <div className="flex justify-end items-center space-x-3">
            <ContactItem
              size="small"
              href="mailto:phudoanco@scgroup.com.vn"
              icon="/assets/icon/x20_mail.svg"
              text={common.t("subHeader.email")}
            />
            <ContactItem
              size="small"
              href="https://goo.gl/maps/6L8aaoeMEJ3KzsLh7"
              icon="/assets/icon/x20_place.svg"
              text={common.t("subHeader.place")}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
