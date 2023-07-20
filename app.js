import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import './style.css'
const Data = require("./data.json");


const Header = ({ navigateMenu }) => {

    return (<div className="header">

        <ul>
            <li>
                <a href="#" onClick={() => navigateMenu('home')}>Home</a>
            </li>
            <li>

                <a href="#" onClick={() => navigateMenu('posts')}>Posts</a>
            </li>
        </ul>


    </div>)
}

const PostsListing = ({ data }) => {
    const postData = data;
    const PostListItems = postData.map((post) => {
        return (<div key={post.id}>
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
const Home = () => {
    return (
        <div><h1>Welcome to my Home page</h1>
            <p>This is my First react home page</p>
        </div>
    )
}
const Posts = () => {
    return (
        <PostsListing data={Data} />
    )
}
const Body = ({ currentMenu }) => {
    if (currentMenu == 'home') {
        return (<Home />);
    } else if (currentMenu == 'posts') {
        return (<Posts />);
    }
}
const Footer = () => {
    return (<div>footer goes here</div>)
}

const AppLayout = () => {
    const [activeMenu, setActiveMenu] = useState('home');
    return (<>
        <Header navigateMenu={setActiveMenu} />
        <Body currentMenu={activeMenu} />
        <Footer />
    </>)
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);