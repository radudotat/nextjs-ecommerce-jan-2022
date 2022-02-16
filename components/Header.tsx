import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import logoShop from '../public/vercel.svg';

const headerStyle = css`
  background-color: #ddd;
  padding: 10px;
  a {
    margin-right: 0.5em;
  }
`;

export default function Header() {
  return (
    <header css={headerStyle}>
      <Image src={logoShop} alt="Our Shop Logo" height="20" />
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/products">
        <a>Products</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </header>
  );
}
