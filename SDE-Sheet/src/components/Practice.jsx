import React from "react";
import Navbar from "./Navbar";
import Selectbar from "./Selectbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Practice (){
    const navigate=useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('data'))
          navigate('/')
      })
    return(
        <>
        <Navbar/>
        <Selectbar top={"DSA"} topi={"Algos"}/>
        </>
    )
}
export default Practice;