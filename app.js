import React from "react";
import ReactDOM  from "react-dom/client";

const Button=()=>{
    return(
        <>
       <input type="button" defaultValue="Click here for Sign-up" />
        </>
    )
}

const App=()=>{
   return(<>
   <p>
   <h1>
        Welcome to my app
    </h1>
   </p>
   <Button/>
    </>) 
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);