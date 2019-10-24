import React from "react";
import MyLayout from "../components/MyLayout";
import Link from "next/link";

// const Index = () => (
//     <div>
//         <Header/>
//         <p>Hello Next.js</p>
//     </div>
// );

// The only special directories are /pages and /static.
// <Link href="/xxx" /> ---> /pages/xxx.js or /pages/xxxFloderName/[xxProp].js

// const PostLink = (props) => (
//     <li>
//         <Link href="/p/[id]" as={`/p/${props.id}`}>
//             <a>{props.id}</a>
//         </Link>
//     </li>
// );
//
// export default function Blog() {
//     return (
//         <MyLayout>
//             <h1>My Blog</h1>
//             <ul>
//                 <PostLink id="Hello-Next.js"/>
//                 <PostLink id="Learn-Next.js"/>
//                 <PostLink id="Deploy-next.js"/>
//             </ul>
//         </MyLayout>
//     )
// };

// const indexContent = <p>Hello Next.js</p>;
// export default function Index() {
//     return <MyLayout content={indexContent}/>
// }

// const Page = () => <p>Hello Next.js</p>;
// export default withLayout(Page);

// const Index = (props) => (
//     <MyLayout>
//         <h1>Batman TV Shows</h1>
//         <ul>
//             {props.shows.map(show => (
//                 <li key={show.id}>
//                     <Link href="/p/[id]" as={`/p/${show.id}`}>
//                         <a>{show.name}</a>
//                     </Link>
//                 </li>
//             ))}
//         </ul>
//     </MyLayout>
// );
//
// Index.getInitialProps = async function () {
//     const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//     const data = await res.json();
//
//     console.log(`show data fetched. count: ${data.length}`);
//
//     return {
//         shows: data.map(entry => entry.show)
//     };
// };
//
// export default Index;

// function getPosts() {
//     return [
//         {id: 'hello-nextjs', title: 'hello next.js'},
//         {id: 'learn-nextjs', title: 'learn next.js is awesome'},
//         {id: 'deploy-nextjs', title: 'deploy app with xxxx'}
//     ];
// }
//
// export default function Blog() {
//     return (
//         <MyLayout>
//             <h1>My Blog</h1>
//             <ul>
//                 {getPosts().map(post => (
//                     <li key={post.id}>
//                         <Link href="/p/[id]" as={`/p/${post.id}`}>
//                             <a>{post.title}</a>
//                         </Link>
//                     </li>
//                 ))}
//             </ul>
//             <style jsx>{`
//                 h1, a {
//                     font-family: 'Arial';
//                 }
//                 ul {
//                     padding: 0;
//                     }
//                 li {
//                     list-style: none;
//                     margin: 5px 0;
//                 }
//                 a {
//                     text-decoration: none;
//                     color: blue;
//                 }
//                 a: hover {
//                     opacity: 0.6;
//                 }
//             `}</style>
//         </MyLayout>
//     )
// }

function getPosts() {
    return [
        {id: 'hello-nextjs', title: 'Hello Next.js'},
        {id: 'learn-nextjs', title: 'Learn Next.js is awesome'},
        {id: 'deploy-nextjs', title: 'Deploy apps with ZEIT'}
    ];
}

const PostLink = ({post}) => (
    <li>
        <Link href="/p/[id]" as={`/p/${post.id}`}>
            <a>{post.title}</a>
        </Link>
        <style jsx>{`
        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
        `}</style>
    </li>
);

export default function Blog() {
    return (
        <MyLayout>
            <h1>My Blog</h1>
            <ul>
                {getPosts().map(post => (
                    <PostLink key={post.id} post={post}/>
                ))}
            </ul>
            <style jsx>{`
            h1,
            a {
              font-family: 'Arial';
            }
    
            ul {
              padding: 0;
            }
            `}</style>
        </MyLayout>
    );
}
