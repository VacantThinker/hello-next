import React from 'react';
import MyLayout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = props => {
  const dirName = '/show/';
  const param_id = '[id]';
  return (
    <MyLayout>
      <h1>Batman TV Shows</h1>
      <ul>
        {props.shows.map(show => (
          <li key={show.id}>
            <Link
              href={`${dirName}${param_id}`}
              as={process.env.HOST_URL + `${dirName}${show.id}`}
            >
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        ul {
          padding: 0;
        }
        li {
          list-style: none;
          margin: 5px 0;
        }
        a {
          text-decoration: none;
          color: blue;
        }
        a: hover {
          opacity: 0.6;
        }
      `}</style>
    </MyLayout>
  );
};

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  // console.log(`show data fetched. count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Index;
