import Header from "./Header";
import React from "react";

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #ddd'
};

export default function MyLayout(props){
    return (
        <div style={layoutStyle}>
            <Header/>
            {props.children}
        </div>
    )
};
