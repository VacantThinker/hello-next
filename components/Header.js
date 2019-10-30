import React from 'react';
import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

export default function Header() {
  return (
    <div>
      <Link href="/" as={process.env.BACKEND_URL + '/'}>
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
        <a style={linkStyle}>About</a>
      </Link>
    </div>
  );
}
