import Head from "next/head";

interface IProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  fullTitle?: string;
}
const WebHead = (props: IProps) => {
  return (
    <Head>
      <title>{props.title || process.env.DEFAULT_SITE_NAME}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="UTF-8" />
      <meta property="og:locale" content={process.env.DEFAULT_LOCALE}></meta>
      <meta
        name="description"
        content={props.description || process.env.DEFAULT_SITE_DESCRIPTION}
      />
      <meta
        name="keywords"
        content={props.keywords || process.env.DEFAULT_KEY_WORDS}
      />
      <meta name="author" content={process.env.AUTHOR} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <link rel="canonical" href={process.env.BASE_URL} />
      <meta name="robots" content="index, follow" />
      <meta property="og:url" content={process.env.BASE_URL} />

      <meta property="og:image" content={props.image || process.env.WEB_LOGO} />

      <meta property="og:type" content="article" />

      <meta property="twitter:card" content="summary" />

      <meta
        property="twitter:title"
        content={props.fullTitle || process.env.DEFAULT_SITE_TITLE}
      />

      <meta property="og:site_name" content={process.env.AUTHOR} />

      <meta property="twitter:url" content={process.env.BASE_URL} />

      <meta
        property="og:title"
        content={props.fullTitle || process.env.DEFAULT_SITE_TITLE}
      />

      <meta property="og:description" content={props.description} />

      <meta
        property="twitter:image"
        content={props.image ? props.image : process.env.WEB_LOGO}
      />
      <meta property="twitter:description" content={props.description} />

      <meta property="og:url" content={process.env.BASE_URL}></meta>
    </Head>
  );
};
export default WebHead;
