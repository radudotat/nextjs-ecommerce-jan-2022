/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import { getProducts } from '../util/database';

const productStyles = css`
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 20px;
`;

export default function Products(props) {
  return (
    <Layout>
      <Head>
        <title>Products</title>
        <meta name="description" content="Our shop Products" />
      </Head>

      <h1 className={styles.title}>Products</h1>

      {props.products.map((product) => {
        return (
          <div key={`product-${product.id}`} css={productStyles}>
            <Link href={`/products/${product.id}`}>
              <a>
                {product.name} is a {product.type} with a {product.accessory}
              </a>
            </Link>
          </div>
        );
      })}
    </Layout>
  );
}

export async function getServerSideProps() {
  const productsList = await getProducts();

  return {
    props: {
      // In the props object, you can pass back
      // whatever information you want
      products: productsList,
    },
  };
}
