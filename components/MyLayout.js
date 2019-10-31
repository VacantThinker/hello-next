import Header from './Header';
import React from 'react';

export default function MyLayout(props) {
  return (
    <>
      <div>
        <Header />
        {props.children}
      </div>
      <style jsx>{`
        div {
          margin: 20;
          padding: 20;
          border: '1px solid #ddd';
        }
      `}</style>
    </>
  );
}
