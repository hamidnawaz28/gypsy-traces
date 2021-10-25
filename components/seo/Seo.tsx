import Head from "next/head";

interface SeoProps {
  title: string;
  description: string;
  siteTitle: string;
  //   tags?: Array<string> | [''];
  imageUrl?: string | "";
  twitterUserName?: string | "";
  contentType?: string | "";
  pageUrl?: string | "";
  siteName?: string | "";
  companyLogo?: string | "";
  language?: string | "";
  siteUrl?: string | "";
  fbId?: string | "";
}

export default function SEO({
  title,
  siteTitle,
  description,
  //   tags,
  imageUrl,
  contentType,
  twitterUserName,
  pageUrl,
  siteName,
  companyLogo,
  language,
  siteUrl,
  fbId,
}: SeoProps) {
  //   const allTags = tags.join(",");
  return (
    <Head>
      <title>{`${title}`}</title>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
      />
      <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="robots" content="noodp" />

      {/* Web SEO */}
      <title>{`${title} | ${siteTitle}`}</title>
      {/* <meta name="keywords" content={allTags} /> */}
      <meta name="description" content={description} />

      {/* FB SEO */}
      <meta property="fb:app_id" content={fbId} />
      <meta property="og:type" content={contentType || "article"} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta property="og:url" content={pageUrl} />

      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={language} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter SEO */}
      <meta name="twitter:site" value={twitterUserName} />
      <meta name="twitter:title" value={title} />
      <meta property="twitter:card" value="summary" />
      <meta property="twitter:description" value={description} />
      <meta name="twitter:image" value={imageUrl} />
      <meta name="twitter:creator" value={twitterUserName} />
      <meta name="twitter:domain" value={siteUrl} />
      <meta name="twitter:url" value={pageUrl} />

      {/* Company Logo */}
      <link rel="icon" href={companyLogo} />
    </Head>
  );
}
