import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import './compounds.css';
import Daata from "./Daata";
import Home from "./Home";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Dsa() {
    const navigate=useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('data'))
          navigate('/')
      })
    return (
        <>
            <Navbar />
            <Daata  top={"DSA"} topi={"Algos"}/>
            
        </>
    )
}
export default Dsa;