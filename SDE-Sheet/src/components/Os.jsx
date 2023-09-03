import React from "react";
import Navbar from "./Navbar";
import Daata from "./Daata";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Os (){
    const navigate=useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('data'))
          navigate('/')
      })
    return(
        <>
        <Navbar/>
        <Daata  top={"Operating-Systems"} topi={"OsAlgos"}/>
        </>
    )
}
export default Os;