import React from 'react';
import MyLayout from '../components/MyLayout';

export default function About() {
  return (
    <MyLayout>
      <p>This is about page</p>
    </MyLayout>
  );
}

// const aboutContent = <p>This is about page</p>;
//
// export default function About() {
//     return <MyLayout content={aboutContent}/>
// }

// const Page = () => <p>This is about page</p>;
// export default withLayout(Page);
