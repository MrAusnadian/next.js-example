import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm a driven, enthusiastic, executive-level technology professional with almost two decades of experience working with computer hardware and software. His primary focus is on building, testing, maintaining, and integrating infrastructure for e-commerce and cryptocurrency platform solutions.</p>
      </section>
    </Layout>
  );
}
