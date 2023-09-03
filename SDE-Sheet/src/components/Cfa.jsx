import React from "react";
import Navbar from "./Navbar";
import Daata from "./Daata";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Cfa (){
    const navigate=useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('data'))
          navigate('/')
      })
    return(
        <>
        <Navbar/>
        <Daata top={"SQL"} topi={"NoSql"}/>
        </>
    )
}
export default Cfa;