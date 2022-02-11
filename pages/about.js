import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
        <meta name="description" content="Our shop Stuff" />
      </Head>

      <h1 className={styles.title}>About Us</h1>
    </Layout>
  );
}
