import { css } from '@emotion/react';
// import Image from 'next/image';
// import Link from 'next/link';
// import logoShop from '../public/vercel.svg';
import Navigation from './Navigation';

const headerStyle = css`
  background-color: #ddd;
  padding: 10px;
  a {
    margin-right: 0.5em;
  }
`;

// type Props = {
//   children: JSX.Element[] | JSX.Element | React.ReactNode;
// };

export default function Header() {
  return (
    <header css={headerStyle}>
      <Navigation />
    </header>
  );
}
