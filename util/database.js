/* eslint-disable require-await */
import camelcaseKeys from 'camelcase-keys';
import { config } from 'dotenv-safe';
import postgres from 'postgres';

// Read the environment variables from the .env
// file, which will then be available for all
// following code
config();

// Connect only once to the database
// https://github.com/vercel/next.js/issues/7811#issuecomment-715259370
function connectOneTimeToDatabase() {
  // When in development, connect only once to the database
  if (!globalThis.postgresSqlClient) {
    globalThis.postgresSqlClient = postgres();
  }
  const sql = globalThis.postgresSqlClient;

  return sql;
}

// Connect to PostgreSQL
const sql = connectOneTimeToDatabase();

console.log('db file');
// const products = [
//   {
//     id: '1',
//     name: 'Tiny',
//     age: 47,
//     type: 'Dragon',
//     accessory: 'Monacle',
//   },
//   {
//     id: '2',
//     name: 'Pete',
//     age: 4,
//     type: 'Iguana',
//     accessory: 'Top Hat',
//   },
//   {
//     id: '3',
//     name: 'Randolph',
//     age: 9,
//     type: 'Parakeet',
//     accessory: 'Ring',
//   },
//   {
//     id: '4',
//     name: 'George',
//     age: 2,
//     type: 'Tiger',
//     accessory: 'Gold Chain',
//   },
//   {
//     id: '5',
//     name: 'Lila',
//     age: 17,
//     type: 'Monkey',
//     accessory: 'Covid Mask',
//   },
//   {
//     id: '6',
//     name: 'Suchi',
//     age: 20,
//     type: 'Bunny',
//     accessory: 'Sword',
//   },
//   {
//     id: '7',
//     name: 'Susi',
//     age: 28,
//     type: 'Wombat',
//     accessory: 'Cane',
//   },
//   {
//     id: '8',
//     name: 'Lulu',
//     age: 21,
//     type: 'Dog',
//     accessory: 'Cane',
//   },
// ];

export async function getProducts() {
  const products = await sql`
    SELECT * FROM products;
  `;

  return products.map((product) => camelcaseKeys(product));
}

export async function getProductById(id) {
  const [product] = await sql`
    SELECT * FROM products WHERE id = ${id};
  `;

  return camelcaseKeys(product[0]);
}
