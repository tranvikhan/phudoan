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

const Demo: NextPage = () => {
  const { t } = useTranslation("home");
  return (
    <div>
      <WebHead />
      <main className={styles.main}>
        <h1 className={styles.title}>
          <Link href="/">{t("title")}</Link>
        </h1>
        <h1 className={styles.title1}>
          <Link href="/demo">{t("demo")}</Link>
        </h1>
      </main>
      {/*  <footer className={styles.footer}>Khan</footer> */}
    </div>
  );
};

export default Demo;
