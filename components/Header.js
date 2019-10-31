import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <div>
        <Link href={'/'} as={process.env.HOST_URL + '/'}>
          <a>Home</a>
        </Link>
        <Link href={'/about'} as={process.env.HOST_URL + '/about'}>
          <a>About</a>
        </Link>
      </div>
      <style jsx>{`
        a {
          margin-right: 15px;
        }
      `}</style>
    </>
  );
}
