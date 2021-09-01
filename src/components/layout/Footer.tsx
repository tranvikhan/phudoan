import { useTranslation } from "next-i18next";
import Image from "next/image";
import React from "react";
import ContactItem from "./ContactItem";
import Container from "./Container";

export default function Footer({ content }: any) {
  const common = useTranslation("common");
  return (
    <div className="bg-primary w-full  py-14 text-white">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:gap-x-14 gap-x-10 gap-y-10">
          <div className="col-span-2 space-y-5">
            <div className="flex items-center space-x-4">
              <Image
                src="/assets/icon/x35_logo_light.svg"
                width={36}
                height={34}
                alt="Logo"
              />
              <h2 className="font-bold text-base leading-snug w-1/2">
                {common.t("footer.siteName")}
              </h2>
            </div>
            <ContactItem
              href="https://goo.gl/maps/6L8aaoeMEJ3KzsLh7"
              icon="/assets/icon/x20_place.svg"
              text={common.t("footer.address")}
            />
            <ContactItem
              size="large"
              href="tel:+84 909191494"
              icon="/assets/icon/x20_call.svg"
              text={common.t("footer.phone")}
            />
            <ContactItem
              href="mailto:phudoanco@scgroup.com.vn"
              icon="/assets/icon/x20_mail.svg"
              text={common.t("footer.email")}
            />
            <div>
              <Image
                src="/assets/icon/x150_published.png"
                width={153}
                height={57}
                alt="public"
              />
            </div>
          </div>
          <div className="space-y-5">
            <h5 className="uppercase text-sm font-bold">
              {common.t("footer.menu1.header")}
            </h5>
            <ContactItem
              href="/about/#Introduction"
              text={common.t("footer.menu1.item1")}
            />
            <ContactItem
              href="/about/#Leaders"
              text={common.t("footer.menu1.item2")}
            />
            <ContactItem
              href="/about/#FeaturedProjects"
              text={common.t("footer.menu1.item3")}
            />
            <ContactItem
              href="/about/#TrainingAndActivities"
              text={common.t("footer.menu1.item4")}
            />
            <ContactItem
              href="/about/#Partners"
              text={common.t("footer.menu1.item5")}
            />
          </div>
          <div className="space-y-5">
            <h5 className="uppercase text-sm font-bold">
              {common.t("footer.menu2.header")}
            </h5>
            <ContactItem
              href="/services/#Seaport"
              text={common.t("footer.menu2.item1")}
            />
            <ContactItem
              href="/services/#Carriage"
              text={common.t("footer.menu2.item2")}
            />
            <ContactItem
              href="/services/#Logistics"
              text={common.t("footer.menu2.item3")}
            />
            <ContactItem
              href="/services/#Warehouse"
              text={common.t("footer.menu2.item4")}
            />
            <ContactItem
              href="/services/#HumanResources"
              text={common.t("footer.menu2.item5")}
            />
          </div>
          <div className="space-y-5">
            <h5 className="uppercase text-sm font-bold">
              {common.t("footer.menu3.header")}
            </h5>
            <ContactItem
              href="/facilities/#Equipments"
              text={common.t("footer.menu3.item1")}
            />
            <ContactItem
              href="/facilities/#Cranes"
              text={common.t("footer.menu3.item2")}
            />
            <ContactItem
              href="/facilities/#Forklifts"
              text={common.t("footer.menu3.item3")}
            />
            <ContactItem
              href="/facilities/#Tractors"
              text={common.t("footer.menu3.item4")}
            />
            <ContactItem
              href="/facilities/#EquipmentCertification"
              text={common.t("footer.menu3.item5")}
            />
          </div>
        </div>
        <div className="font-medium text-sm mt-14">
          {common.t("footer.copyRight")}
        </div>
      </Container>
    </div>
  );
}
