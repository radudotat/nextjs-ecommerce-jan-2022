// import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { BiCart } from 'react-icons/bi';
import logoShop from '../public/svg/pizza-chef.svg';
import styles from '../styles/Home.module.css';

// import Header from './Header';

export default function Navigation(/* props: Props */) {
  return (
    <nav className={styles.navigation}>
      <div className={styles.logo}>
        <Image src={logoShop} alt="Pizza Prego Logo" width="40" />
      </div>
      <div className={styles.links}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/products">
          <a>Products</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
      <div className="cart">
        <Link href="/about">
          <a>
            <BiCart height="40" />
          </a>
        </Link>
      </div>
    </nav>
  );
}
