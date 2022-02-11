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
            {/* Dynamic link, eg. /products/1, /products/2, etc */}
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

// Code in getServerSideProps runs only in
// Node.js, and allows you to do fancy things:
// - Read files from the file system
// - Connect to a (real) database
//
// getServerSideProps is exported from your files
// (ONLY FILES IN /pages) and gets imported
// by Next.js
export async function getServerSideProps() {
  const products = await getProducts();

  // Important:
  // - Always return an object from getServerSideProps
  // - Always return a key in that object that is
  // called props
  return {
    props: {
      // In the props object, you can pass back
      // whatever information you want
      products: products,
    },
  };
}
