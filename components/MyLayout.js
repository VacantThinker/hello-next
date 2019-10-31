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
          margin: 20px;
          padding: 20px;
          border: 1px solid #ddd;
        }
      `}</style>
    </>
  );
}
