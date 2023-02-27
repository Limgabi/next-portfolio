import Layout from "@/components/layout";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>임가비 포트폴리오</title>
        <meta name="description" content="임가비 포트폴리오" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  );
}
