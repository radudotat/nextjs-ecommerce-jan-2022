// import { css } from '@emotion/react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from './Header';

export default function Layout(props) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div styles={styles} className={styles.container}>
        <Header />
        <main>{props.children}</main>
      </div>
    </>
  );
}
