import React,{useState,useEffect,useCallback} from "react";
import ReactDOM from "react-dom/client";
import Headers from "./components/Header";
import Body from "./components/body";


function Githubprofile()
{

    return(
        <>
        <Headers></Headers>
        <Body></Body>
        </> 
    )

}



ReactDOM.createRoot(document.getElementById("root")).render(<Githubprofile/>)