import ProgressBar from "@badrap/bar-of-progress";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import Router from "next/router";
import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";

import "aos/dist/aos.css";
import { useEffect } from "react";
const progress = new ProgressBar({
  size: 2,
  color: "#23e88a",
  className: "bar-of-progress",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      offset: 50,
    });
  }, []);

  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
