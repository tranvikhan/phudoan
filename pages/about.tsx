import type { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import KBadge from "../src/components/badge/KBadge";
import KCard from "../src/components/card/KCard";
import KCardCarouse from "../src/components/card/KCardCarouse";
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
    ...(await serverSideTranslations(locale, ["about", "common"])),
  },
});

const About: NextPage = () => {
  const about = useTranslation("about");

  return (
    <>
      <WebHead
        title={about.t("head.title")}
        description={about.t("head.description")}
      />
      <Layout>
        <KWallpaper
          background="/assets/image/wallpaper/x1440_wallpager_1.png"
          text={about.t("heading")}
        />
        <Body>
          <video controls loop>
            <source src="/assets/video/PhuDoanVideo.mp4" type="video/mp4" />
          </video>
          <KBadge>{about.t("section1.badge")}</KBadge>
          <KSpace gap={5} align="start">
            <KHeading
              size="lg"
              color="primary"
              uppercase
              weight="bold"
              id="Introduction"
            >
              {about.t("section2.subHeading")}
            </KHeading>
            <KHeading size="3xl">{about.t("section2.heading")}</KHeading>
            <KParagraph>{about.t("section2.paragraph1")}</KParagraph>
            <KParagraph>{about.t("section2.paragraph2")}</KParagraph>
            <KParagraph>{about.t("section2.paragraph3")}</KParagraph>
            <KGrid cols={2} gap={8}>
              <KCard
                type="partner"
                image="/assets/image/partner/x120_logo_phumy.png"
                heading={about.t("section2.card1")}
              />
              <KCard
                type="partner"
                image="/assets/image/partner/x120_chungnhan.png"
                heading={about.t("section2.card3")}
              />
            </KGrid>
          </KSpace>

          <KSpace gap={5} align="start">
            <KHeading
              size="lg"
              color="primary"
              uppercase
              weight="bold"
              id="Leaders"
            >
              {about.t("section3.subHeading")}
            </KHeading>
            <KHeading size="3xl">{about.t("section3.heading")}</KHeading>
            <KGrid cols={3} gap={8}>
              <KCard
                type="leader"
                image="/assets/image/leader/x360_avatar_nguyenquoctuan.png"
                heading={about.t("section3.leader1.name")}
                paragraph={about.t("section3.leader1.position")}
              />
              <KCard
                type="leader"
                image="/assets/image/leader/x360_avatar_lehoangtam.png"
                heading={about.t("section3.leader2.name")}
                paragraph={about.t("section3.leader2.position")}
              />
              <KCard
                type="leader"
                image="/assets/image/leader/x360_avatar_nguyenvandang.png"
                heading={about.t("section3.leader3.name")}
                paragraph={about.t("section3.leader3.position")}
              />
              <KCard
                type="leader"
                image="/assets/image/leader/x360_avatar_nguyenxuandieu.png"
                heading={about.t("section3.leader4.name")}
                paragraph={about.t("section3.leader4.position")}
              />
              <KCard
                type="leader"
                image="/assets/image/leader/x360_avatar_nguyenthithuha.png"
                heading={about.t("section3.leader5.name")}
                paragraph={about.t("section3.leader5.position")}
              />
              <KCard
                type="leader"
                image="/assets/image/leader/x360_avatar_phamvanthuan.png"
                heading={about.t("section3.leader6.name")}
                paragraph={about.t("section3.leader6.position")}
              />
              <KCard
                type="leader"
                image="/assets/image/leader/x360_avatar_nguyenhoangminh.png"
                heading={about.t("section3.leader7.name")}
                paragraph={about.t("section3.leader7.position")}
              />
              <KCard
                type="leader"
                image="/assets/image/leader/x360_avatar_nguyenthanhtai.png"
                heading={about.t("section3.leader8.name")}
                paragraph={about.t("section3.leader8.position")}
              />
            </KGrid>
          </KSpace>

          <KSpace gap={5} align="start">
            <KHeading size="3xl" id="FeaturedProjects">
              {about.t("section4.heading")}
            </KHeading>
            <KGrid cols={2} gap={8}>
              <KCardCarouse
                images={[
                  "/assets/image/project/x551_project_1_1.png",
                  "/assets/image/project/x551_project_1_2.png",
                  "/assets/image/project/x551_project_1_3.png",
                ]}
                heading={about.t("section4.grid.item1")}
              />
              <KCardCarouse
                images={[
                  "/assets/image/project/x551_project_2_1.png",
                  "/assets/image/project/x551_project_2_2.png",
                  "/assets/image/project/x551_project_2_3.png",
                ]}
                heading={about.t("section4.grid.item2")}
              />
              <KCardCarouse
                images={[
                  "/assets/image/project/x551_project_3_1.png",
                  "/assets/image/project/x551_project_3_2.png",
                  "/assets/image/project/x551_project_3_3.png",
                ]}
                heading={about.t("section4.grid.item3")}
              />
              <KCardCarouse
                images={[
                  "/assets/image/project/x551_project_4_1.png",
                  "/assets/image/project/x551_project_4_2.png",
                  "/assets/image/project/x551_project_4_3.png",
                ]}
                heading={about.t("section4.grid.item4")}
              />
              <KCardCarouse
                images={[
                  "/assets/image/project/x551_project_5_1.png",
                  "/assets/image/project/x551_project_5_2.png",
                  "/assets/image/project/x551_project_5_3.png",
                ]}
                heading={about.t("section4.grid.item5")}
              />
              <KCardCarouse
                images={[
                  "/assets/image/project/x551_project_6_1.png",
                  "/assets/image/project/x551_project_6_2.png",
                  "/assets/image/project/x551_project_6_3.png",
                ]}
                heading={about.t("section4.grid.item6")}
              />
            </KGrid>
          </KSpace>

          <KSpace gap={5} align="start">
            <KHeading size="3xl" id="TrainingAndActivities">
              {about.t("section5.heading")}
            </KHeading>
            <KGrid cols={2} gap={5}>
              <KCard
                type="default1"
                image="/assets/image/activity/x640_activity_9.png"
                heading={about.t("section5.grid.item1")}
              />
              <KCard
                type="default1"
                image="/assets/image/activity/x640_activity_10.png"
                heading={about.t("section5.grid.item2")}
              />
              <KCard
                type="default1"
                image="/assets/image/activity/x640_activity_11.png"
                heading={about.t("section5.grid.item3")}
              />
              <KCard
                type="default1"
                image="/assets/image/activity/x640_activity_12.png"
                heading={about.t("section5.grid.item4")}
              />
            </KGrid>
          </KSpace>

          <KSpace gap={5} align="start">
            <KHeading size="3xl" id="Partners">
              {about.t("section6.heading")}
            </KHeading>
            <KGrid cols={5} gap={5}>
              <KCard
                type="logo"
                image="/assets/image/partner/x172_logo_posco.png"
              />
              <KCard
                type="logo"
                image="/assets/image/partner/x172_logo_tvp.png"
              />
              <KCard
                type="logo"
                image="/assets/image/partner/x172_logo_pv_coating.png"
              />
              <KCard
                type="logo"
                image="/assets/image/partner/x172_logo_ptsc.png"
              />
              <KCard
                type="logo"
                image="/assets/image/partner/x172_logo_tonhoasen.png"
              />
              <KCard
                type="logo"
                image="/assets/image/partner/x172_logo_sppsa.png"
              />
              <KCard
                type="logo"
                image="/assets/image/partner/x172_logo_vina_logistics.png"
              />
              <KCard
                type="logo"
                image="/assets/image/partner/x172_logo_tancang.png"
              />
              <KCard
                type="logo"
                image="/assets/image/partner/x172_logo_longan.png"
              />
              <KCard
                type="logo"
                image="/assets/image/partner/x172_logo_thivai.png"
              />
            </KGrid>
          </KSpace>
        </Body>
      </Layout>
    </>
  );
};

export default About;
