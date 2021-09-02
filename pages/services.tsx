import type { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import HighlighCards from "../src/components/card/HighlighCards";
import KCard from "../src/components/card/KCard";
import KGrid from "../src/components/grid/KGrid";
import Body from "../src/components/layout/Body";
import Layout from "../src/components/layout/Layout";
import WebHead from "../src/components/layout/WebHead";
import KSpace from "../src/components/space/KSpace";
import KHeading from "../src/components/typography/KHeading";
import KParagraph from "../src/components/typography/KParagraph";
import KWallpaper from "../src/components/wallpaper/KWallpaper";

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["service", "common", "home"])),
  },
});

const Service: NextPage = () => {
  const service = useTranslation("service");

  return (
    <>
      <WebHead
        title={service.t("head.title")}
        description={service.t("head.description")}
      />
      <Layout>
        <KWallpaper
          text={service.t("heading")}
          background="/assets/image/wallpaper/x1440_wallpager_2.png"
        />
        <Body>
          <HighlighCards />
          <KSpace gap={5} align="start">
            <KHeading size="lg" color="primary" uppercase weight="bold">
              {service.t("section2.subHeading")}
            </KHeading>
            <KHeading size="3xl">{service.t("section2.heading")}</KHeading>
            <KParagraph>{service.t("section2.paragraph1")}</KParagraph>
            <KParagraph>{service.t("section2.paragraph2")}</KParagraph>
          </KSpace>

          <KSpace gap={5} align="start">
            <KHeading size="3xl" id="Seaport">
              {service.t("section3")}
            </KHeading>
            <KGrid cols={3} gap={8}>
              <KCard
                type="image"
                priority
                image="/assets/image/service/x720_service_1_1.png"
              />
              <KCard
                type="image"
                priority
                image="/assets/image/service/x720_service_1_2.png"
              />
              <KCard
                type="image"
                priority
                image="/assets/image/service/x720_service_1_3.png"
              />
            </KGrid>
          </KSpace>

          <KSpace gap={5} align="start">
            <KHeading size="3xl" id="Carriage">
              {service.t("section4")}
            </KHeading>
            <KGrid cols={3} gap={8}>
              <KCard
                type="image"
                image="/assets/image/service/x720_service_2_1.png"
              />
              <KCard
                type="image"
                image="/assets/image/service/x720_service_2_2.png"
              />
              <KCard
                type="image"
                image="/assets/image/service/x720_service_2_3.png"
              />
            </KGrid>
          </KSpace>

          <KSpace gap={5} align="start">
            <KHeading size="3xl" id="Logistics">
              {service.t("section5")}
            </KHeading>
            <KGrid cols={3} gap={8}>
              <KCard
                type="image"
                image="/assets/image/service/x720_service_3_1.png"
              />
              <KCard
                type="image"
                image="/assets/image/service/x720_service_3_2.png"
              />
              <KCard
                type="image"
                image="/assets/image/service/x720_service_3_3.png"
              />
            </KGrid>
          </KSpace>

          <KSpace gap={5} align="start">
            <KHeading size="3xl" id="Warehouse">
              {service.t("section6")}
            </KHeading>
            <KGrid cols={3} gap={8}>
              <KCard
                type="image"
                image="/assets/image/service/x720_service_4_1.png"
              />
              <KCard
                type="image"
                image="/assets/image/service/x720_service_4_2.png"
              />
              <KCard
                type="image"
                image="/assets/image/service/x720_service_4_3.png"
              />
            </KGrid>
          </KSpace>

          <KSpace gap={5} align="start">
            <KHeading size="3xl" id="HumanResources">
              {service.t("section7")}
            </KHeading>
            <KGrid cols={3} gap={8}>
              <KCard
                type="image"
                image="/assets/image/service/x720_service_5_1.png"
              />
              <KCard
                type="image"
                image="/assets/image/service/x720_service_5_2.png"
              />
              <KCard
                type="image"
                image="/assets/image/service/x720_service_5_3.png"
              />
            </KGrid>
          </KSpace>

          <KSpace gap={5} align="start">
            <KHeading size="3xl">{service.t("section8.heading")}</KHeading>
            <KGrid cols={4} gap={5}>
              <KCard
                type="default2"
                image="/assets/image/activity/x640_activity_1.png"
                heading={service.t("section8.grid.item1")}
              />
              <KCard
                type="default2"
                image="/assets/image/activity/x640_activity_2.png"
                heading={service.t("section8.grid.item2")}
              />
              <KCard
                type="default2"
                image="/assets/image/activity/x640_activity_3.png"
                heading={service.t("section8.grid.item3")}
              />
              <KCard
                type="default2"
                image="/assets/image/activity/x640_activity_4.png"
                heading={service.t("section8.grid.item4")}
              />
              <KCard
                type="default2"
                image="/assets/image/activity/x640_activity_5.png"
                heading={service.t("section8.grid.item5")}
              />
              <KCard
                type="default2"
                image="/assets/image/activity/x640_activity_6.png"
                heading={service.t("section8.grid.item6")}
              />
              <KCard
                type="default2"
                image="/assets/image/activity/x640_activity_7.png"
                heading={service.t("section8.grid.item7")}
              />
              <KCard
                type="default2"
                image="/assets/image/activity/x640_activity_8.png"
                heading={service.t("section8.grid.item8")}
              />
            </KGrid>
          </KSpace>
        </Body>
      </Layout>
    </>
  );
};

export default Service;
