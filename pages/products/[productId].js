import Head from 'next/head';
// import Image from 'next/image';
import Layout from '../../components/Layout';
import { getProductById } from '../../util/database';

export default function SingleProduct(props) {
  console.log('SingleProduct', props);
  return (
    <Layout>
      <Head>
        <title>
          {props.product.name} ({props.product.type})
        </title>
        <meta
          description={`${props.product.name} is a ${props.product.type} with a ${props.product.accessory}`}
        />
      </Head>
      <h1>
        {props.product.name} ({props.product.type})
      </h1>
      <p>{JSON.stringify(props)}</p>
      {/* <Image
        src={`/products/${props.product.id}.jpg`}
        width="300"
        height="300"
      /> */}
      <div>id: {props.product.id}</div>
      <div>name: {props.product.name}</div>
      <div>age: {props.product.age}</div>
      <div>type: {props.product.type}</div>
      <div>accessory: {props.product.accessory}</div>
    </Layout>
  );
}

// The parameter `context` gets passed from Next.js
// and includes a bunch of information about the
// request
export async function getServerSideProps(context) {
  // This is the variable that we get from the URL
  // (anything after the slash)
  const productId = context.query.productId;
  const product = await getProductById(productId);

  console.log('product', product, context.query);

  return {
    props: {
      product: product,
      productId: productId,
    },
  };
}
