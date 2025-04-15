import React from "react";
import ReactDOM from "react-dom/client";

const heading = (
    <div>
        <h1>hi from react element 😘❤️</h1>
    </div>
);

const Title1 = () =>{
   return <h1>hi from title 1 react component 😍💕</h1>      
}

const Title2 = function(){
    return <div>
            <h1>hi from title 2 react component 😁😘 </h1>
            <h2>Am i right pls check 😁💕</h2>
            </div>
           
}


const Title3 = () => (
     <div>
        <h1>hi from title 3 react component and call other react element and react component 👌🤣💕</h1>
        {heading};
        <Title1></Title1>
        {Title2()}
    </div>
);



const Root = ReactDOM.createRoot(document.getElementById("root"));

Root.render(<Title3></Title3>);