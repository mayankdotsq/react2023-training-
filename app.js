import React from "react";
import ReactDOM  from "react-dom/client";

App=()=>{
   return(<>
    <h1>
        Welcome to my app
    </h1>
    </>) 
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);