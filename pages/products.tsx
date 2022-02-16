import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import { getProducts, Product, ProductsList } from '../util/database';
import formatPrice from '../util/helpers';

type Props = {
  product: Product;
  products: ProductsList;
};

// const productStyles = css`
//   border-radius: 5px;
//   border: 1px solid #ccc;
//   padding: 15px;
//   margin-bottom: 20px;
// `;

const productStyles = css`
  border-radius: 5px;
  margin-bottom: 20px;
`;

export default function Products(props: Props) {
  return (
    <Layout>
      <Head>
        <title>Products</title>
        <meta name="description" content="Our shop Products" />
      </Head>

      <h1 className={styles.title}>Products</h1>

      {props.products.map((product: Product) => {
        return (
          <div key={`product-${product.id}`} css={productStyles}>
            <Link href={`/products/${product.id}`}>
              <a>
                {product.name} costs {formatPrice(product.price)}
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
