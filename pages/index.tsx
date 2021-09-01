import type { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import KBadge from "../src/components/badge/KBadge";
import KLinkButton from "../src/components/button/KLinkButton";
import HighlighCards from "../src/components/card/HighlighCards";
import KCard from "../src/components/card/KCard";
import KCardCarouse from "../src/components/card/KCardCarouse";
import KGrid from "../src/components/grid/KGrid";
import Body from "../src/components/layout/Body";
import Layout from "../src/components/layout/Layout";
import WebHead from "../src/components/layout/WebHead";
import KSpace from "../src/components/space/KSpace";
import KHeading from "../src/components/typography/KHeading";
import KParagraph from "../src/components/typography/KParagraph";
import KCarousel, {
  IKCarouselItem,
} from "../src/components/wallpaper/KCarousel";

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["home", "common"])),
  },
});

const Home: NextPage = () => {
  const home = useTranslation("home");

  const carouselItems: IKCarouselItem[] = [
    {
      heading: home.t("heading.slide1.heading"),
      paragraph: home.t("heading.slide1.paragraph"),
      background: "/assets/image/wallpaper/x1440_wallpager_1.png",
      button: {
        text: home.t("heading.slide1.button"),
        href: "/services",
      },
    },
    {
      heading: home.t("heading.slide2.heading"),
      paragraph: home.t("heading.slide2.paragraph"),
      background: "/assets/image/wallpaper/x1440_wallpager_2.png",
      button: {
        text: home.t("heading.slide2.button"),
        href: "/services",
      },
    },
    {
      heading: home.t("heading.slide3.heading"),
      paragraph: home.t("heading.slide3.paragraph"),
      background: "/assets/image/wallpaper/x1440_wallpager_3.png",
      button: {
        text: home.t("heading.slide3.button"),
        href: "/services",
      },
    },
  ];

  return (
    <>
      <WebHead
        title={home.t("head.title")}
        description={home.t("head.description")}
      />
      <Layout>
        <KCarousel items={carouselItems} />
        <Body>
          <HighlighCards />
          <KGrid cols={2} gap={10}>
            <video controls loop>
              <source src="/assets/video/PhuDoanVideo.mp4" type="video/mp4" />
            </video>
            <KSpace gap={5} justify="between" align="start">
              <KSpace gap={5} align="start">
                <KHeading size="lg" color="primary" uppercase weight="bold">
                  {home.t("section2.subHeading")}
                </KHeading>
                <KHeading size="3xl">{home.t("section2.heading")}</KHeading>
                <KParagraph>{home.t("section2.paragraph")}</KParagraph>
              </KSpace>
              <KBadge>{home.t("section2.badge")}</KBadge>
            </KSpace>
          </KGrid>

          <KGrid cols={2} gap={10}>
            <KSpace gap={5} justify="between" align="start">
              <KSpace gap={5} align="start">
                <KHeading size="lg" color="primary" uppercase weight="bold">
                  {home.t("section3.subHeading")}
                </KHeading>
                <KHeading size="3xl">{home.t("section3.heading")}</KHeading>
                <KParagraph>{home.t("section3.paragraph1")}</KParagraph>
                <KParagraph>{home.t("section3.paragraph2")}</KParagraph>
                <KLinkButton href="/services">
                  {home.t("section3.button")}
                </KLinkButton>
              </KSpace>
            </KSpace>
            <KGrid responsive={false} cols={2} gap={5}>
              <KCard
                type="overlay"
                image="/assets/image/service/x640_service_1.png"
                heading={home.t("section3.grid.item1")}
              />
              <KCard
                type="overlay"
                image="/assets/image/service/x640_service_2.png"
                heading={home.t("section3.grid.item2")}
              />
              <KCard
                type="overlay"
                image="/assets/image/service/x640_service_3.png"
                heading={home.t("section3.grid.item3")}
              />
              <KCard
                type="overlay"
                image="/assets/image/service/x640_service_4.png"
                heading={home.t("section3.grid.item4")}
              />
              <KCard
                type="overlay"
                image="/assets/image/service/x640_service_5.png"
                heading={home.t("section3.grid.item5")}
              />
              <KCard
                type="overlay"
                image="/assets/image/service/x640_service_6.png"
                heading={home.t("section3.grid.item6")}
              />
            </KGrid>
          </KGrid>

          <KSpace gap={5} align="start">
            <KHeading size="3xl">{home.t("section4.heading")}</KHeading>
            <KGrid cols={2} gap={8}>
              <KCardCarouse
                images={[
                  "/assets/image/project/x551_project_1_1.png",
                  "/assets/image/project/x551_project_1_2.png",
                  "/assets/image/project/x551_project_1_3.png",
                ]}
                heading={home.t("section4.grid.item1")}
              />
              <KCardCarouse
                images={[
                  "/assets/image/project/x551_project_2_1.png",
                  "/assets/image/project/x551_project_2_2.png",
                  "/assets/image/project/x551_project_2_3.png",
                ]}
                heading={home.t("section4.grid.item2")}
              />
              <KCardCarouse
                images={[
                  "/assets/image/project/x551_project_3_1.png",
                  "/assets/image/project/x551_project_3_2.png",
                  "/assets/image/project/x551_project_3_3.png",
                ]}
                heading={home.t("section4.grid.item3")}
              />
              <KCardCarouse
                images={[
                  "/assets/image/project/x551_project_4_1.png",
                  "/assets/image/project/x551_project_4_2.png",
                  "/assets/image/project/x551_project_4_3.png",
                ]}
                heading={home.t("section4.grid.item4")}
              />
              <KCardCarouse
                images={[
                  "/assets/image/project/x551_project_5_1.png",
                  "/assets/image/project/x551_project_5_2.png",
                  "/assets/image/project/x551_project_5_3.png",
                ]}
                heading={home.t("section4.grid.item5")}
              />
              <KCardCarouse
                images={[
                  "/assets/image/project/x551_project_6_1.png",
                  "/assets/image/project/x551_project_6_2.png",
                  "/assets/image/project/x551_project_6_3.png",
                ]}
                heading={home.t("section4.grid.item6")}
              />
            </KGrid>
          </KSpace>

          <KSpace gap={5} align="start">
            <KHeading size="3xl">{home.t("section5.heading")}</KHeading>
            <KGrid cols={4} gap={5}>
              <KCard
                type="default2"
                image="/assets/image/activity/x640_activity_1.png"
                heading={home.t("section5.grid.item1")}
              />
              <KCard
                type="default2"
                image="/assets/image/activity/x640_activity_2.png"
                heading={home.t("section5.grid.item2")}
              />
              <KCard
                type="default2"
                image="/assets/image/activity/x640_activity_3.png"
                heading={home.t("section5.grid.item3")}
              />
              <KCard
                type="default2"
                image="/assets/image/activity/x640_activity_4.png"
                heading={home.t("section5.grid.item4")}
              />
              <KCard
                type="default2"
                image="/assets/image/activity/x640_activity_5.png"
                heading={home.t("section5.grid.item5")}
              />
              <KCard
                type="default2"
                image="/assets/image/activity/x640_activity_6.png"
                heading={home.t("section5.grid.item6")}
              />
              <KCard
                type="default2"
                image="/assets/image/activity/x640_activity_7.png"
                heading={home.t("section5.grid.item7")}
              />
              <KCard
                type="default2"
                image="/assets/image/activity/x640_activity_8.png"
                heading={home.t("section5.grid.item8")}
              />
            </KGrid>
          </KSpace>

          <KSpace gap={5} align="start">
            <KHeading size="3xl">{home.t("section6.heading")}</KHeading>
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

export default Home;
