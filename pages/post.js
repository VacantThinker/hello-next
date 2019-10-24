import {useRouter} from "next/router";
import MyLayout from "../components/MyLayout";
import React from "react";

const Content = () => {
    const router = useRouter();

    return (
        <>
            <h1>{router.query.title}</h1>
            <p>This is blog post content</p>
        </>
    );
};

const Page = () => (
    <MyLayout>
        <Content/>
    </MyLayout>
);

export default Page;
