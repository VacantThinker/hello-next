import MyLayout from '../../components/MyLayout';
import React from 'react';
import fetch from 'isomorphic-unfetch';

const Post = (props) => (
  <MyLayout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
    <img src={props.show.image.medium}/>
  </MyLayout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();
  // console.log(`fetched show: ${show.name}`);
  return { show };
};

export default Post;


