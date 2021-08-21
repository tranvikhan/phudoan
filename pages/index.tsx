import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import WebHead from "../src/components/layout/WebHead";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["home"])),
  },
});

const Home: NextPage = () => {
  const { t } = useTranslation("home");
  return (
    <div>
      <WebHead />
      <main className={styles.main}>
        <h1 className={styles.title}>
          <Link href="/">{t("title")}</Link>
        </h1>
        <div className={styles.link}>
          <Link href="/demo">Go to next Page</Link>
        </div>
      </main>
      {/*  <footer className={styles.footer}>Khan</footer> */}
    </div>
  );
};

export default Home;