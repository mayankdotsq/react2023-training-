import React from "react";
import ReactDOM from "react-dom/client";
const Data = require("./data.json");

const Header = () => {
    return (<div>Header goes here</div>)
}
const PostsListing = ({ data }) => {
    const postData = data;
    const PostListItems = postData.map((post) => {
        return(<div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            </div>);
    })
    return (
        <div>
            <h1>My Post Listing</h1>
            {PostListItems}
        </div>
    );
}
const Posts = () => {
    return (
        <PostsListing data={Data} />
    )
}
const Body = () => {
    return (<Posts />);
}
const Footer = () => {
    return (<div>footer goes here</div>)
}

const AppLayout = () => {

    return (<>
        <Header />
        <Body />
        <Footer />
    </>)
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);