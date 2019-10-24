import MyLayout from "../../components/MyLayout";
import React from "react";
import fetch from "isomorphic-unfetch";
import {useRouter} from "next/router";
import Markdown from 'react-markdown';

// export default function Post() {
//     const router = useRouter();
//     return (
//         <MyLayout>
//             <h1>{router.query.id}</h1>
//             <p>This is the blog post content</p>
//         </MyLayout>
//     )
// }

const Post = (props) => (
    <MyLayout>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
        <img src={props.show.image.medium}/>
    </MyLayout>
);

Post.getInitialProps = async function (context) {
    const {id} = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();

    console.log(`fetched show: ${show.name}`);

    return {show};
};

export default Post;

// export default () => {
//     const router = useRouter();
//     return (
//         <MyLayout>
//             <h1>{router.query.id}</h1>
//             <div className="markdown">
//                 <Markdown source={`
// This is our blog post.
// Yes. We can have a [link](/link).
// And we can have a title as well.
//
// ### This is a title
//
// And here's the content.
//                 `} />
//             </div>
//             <style jsx >{`
//             .markdown {
//                 font-family: 'Arial';
//             }
//             .markdown a {
//                 text-decoration: none;
//                 color: blue;
//             }
//             .markdown a:hover {
//                 opacity: 0.6;
//             }
//             .markdown h3 {
//                 margin: 0;
//                 padding: 0;
//                 text-transform: uppercase;
//                 color: red;
//             }
//             `}</style>
//         </MyLayout>
//     )
// }
