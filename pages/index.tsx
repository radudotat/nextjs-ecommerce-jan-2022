import Head from 'next/head';
import Image from 'next/image';
// import Image from 'next/image';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import Hero from '../public/svg/hero.svg';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Shop</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="row">
        <div className="col"></div>
        <div className={styles.hero}>
          <Image
            className={styles.heroimage}
            src={Hero}
            alt="Pizza Prego Logo"
          />
        </div>
      </div>
    </Layout>
  );
}
