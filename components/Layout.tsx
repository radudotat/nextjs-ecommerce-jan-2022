// import { css } from '@emotion/react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from './Header';

type Props = {
  children: JSX.Element[] | JSX.Element | React.ReactNode;
};

export default function Layout(props: Props) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <main className={(styles.container, styles.main)}>
          {props.children}
        </main>
      </div>
    </>
  );
}
