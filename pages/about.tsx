import type { NextPage } from "next";

import WebHead from "../src/components/layout/WebHead";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import Layout from "../src/components/layout/Layout";
export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["home"])),
  },
});

const Home: NextPage = () => {
  const { t } = useTranslation("home");
  return (
    <>
      <WebHead />
      <Layout>
        <>About</>
      </Layout>
    </>
  );
};

export default Home;
