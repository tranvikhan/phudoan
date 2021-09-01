import type { NextPage } from "next";

import WebHead from "../src/components/layout/WebHead";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import Layout from "../src/components/layout/Layout";
import React from "react";
import Body from "../src/components/layout/Body";

import KGrid from "../src/components/grid/KGrid";
import KHeading from "../src/components/typography/KHeading";
import KSpace from "../src/components/space/KSpace";
import KCard from "../src/components/card/KCard";
import KWallpaper from "../src/components/wallpaper/KWallpaper";
export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["facilities", "common"])),
  },
});

const Facilities: NextPage = () => {
  const facilities = useTranslation("facilities");

  return (
    <>
      <WebHead
        title={facilities.t("head.title")}
        description={facilities.t("head.description")}
      />
      <Layout>
        <KWallpaper
          text={facilities.t("heading")}
          background="/assets/image/wallpaper/x1440_wallpager_3.png"
        />
        <Body>
          <KSpace gap={5} align="start">
            <KHeading size="3xl">{facilities.t("section1")}</KHeading>
            <KGrid cols={3} gap={8}>
              <KCard
                type="image"
                image="/assets/image/facilities/x720_facilities_1_1.png"
              />
              <KCard
                type="image"
                image="/assets/image/facilities/x720_facilities_1_2.png"
              />
              <KCard
                type="image"
                image="/assets/image/facilities/x720_facilities_1_3.png"
              />
            </KGrid>
          </KSpace>

          <KSpace gap={5} align="start">
            <KHeading size="3xl" id="Forklifts">
              {facilities.t("section2")}
            </KHeading>
            <KGrid cols={3} gap={8}>
              <KCard
                type="image"
                image="/assets/image/facilities/x720_facilities_2_1.png"
              />
              <KCard
                type="image"
                image="/assets/image/facilities/x720_facilities_2_2.png"
              />
              <KCard
                type="image"
                image="/assets/image/facilities/x720_facilities_2_3.png"
              />
            </KGrid>
          </KSpace>

          <KSpace gap={5} align="start">
            <KHeading size="3xl" id="Tractors">
              {facilities.t("section3")}
            </KHeading>
            <KGrid cols={3} gap={8}>
              <KCard
                type="image"
                image="/assets/image/facilities/x720_facilities_3_1.png"
              />
              <KCard
                type="image"
                image="/assets/image/facilities/x720_facilities_3_2.png"
              />
              <KCard
                type="image"
                image="/assets/image/facilities/x720_facilities_3_3.png"
              />
            </KGrid>
          </KSpace>

          <KSpace gap={5} align="start">
            <KHeading size="3xl" id="Cranes">
              {facilities.t("section4")}
            </KHeading>
            <KGrid cols={3} gap={8}>
              <KCard
                type="image"
                image="/assets/image/facilities/x720_facilities_4_1.png"
              />
              <KCard
                type="image"
                image="/assets/image/facilities/x720_facilities_4_2.png"
              />
              <KCard
                type="image"
                image="/assets/image/facilities/x720_facilities_4_3.png"
              />
            </KGrid>
          </KSpace>

          <KSpace gap={5} align="start">
            <KHeading size="3xl" id="Equipments">
              {facilities.t("section5")}
            </KHeading>
            <KGrid cols={3} gap={8}>
              <KCard
                type="image"
                image="/assets/image/facilities/x720_facilities_5_1.png"
              />
              <KCard
                type="image"
                image="/assets/image/facilities/x720_facilities_5_2.png"
              />
              <KCard
                type="image"
                image="/assets/image/facilities/x720_facilities_5_3.png"
              />
              <KCard
                type="image"
                image="/assets/image/facilities/x720_facilities_5_4.png"
              />
              <KCard
                type="image"
                image="/assets/image/facilities/x720_facilities_5_5.png"
              />
              <KCard
                type="image"
                image="/assets/image/facilities/x720_facilities_5_6.png"
              />
            </KGrid>
          </KSpace>

          <KSpace gap={5} align="start">
            <KHeading size="3xl" id="EquipmentCertification">
              {facilities.t("section6")}
            </KHeading>
            <KGrid cols={3} gap={8}>
              <KCard
                type="image"
                image="/assets/image/certificate/x360_certificate_1.png"
              />
              <KCard
                type="image"
                image="/assets/image/certificate/x360_certificate_2.png"
              />
              <KCard
                type="image"
                image="/assets/image/certificate/x360_certificate_3.png"
              />
              <KCard
                type="image"
                image="/assets/image/certificate/x360_certificate_4.png"
              />
              <KCard
                type="image"
                image="/assets/image/certificate/x360_certificate_5.png"
              />
              <KCard
                type="image"
                image="/assets/image/certificate/x360_certificate_6.png"
              />
            </KGrid>
          </KSpace>
        </Body>
      </Layout>
    </>
  );
};

export default Facilities;
