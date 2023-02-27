import Layout from "@/components/layout";
import Head from "next/head";

function Projects() {
  return (
    <Layout>
      <Head>
        <title>임가비 프로젝트</title>
        <meta name="description" content="임가비 프로젝트" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>projects</h1>
    </Layout>
  )
}

export default Projects;