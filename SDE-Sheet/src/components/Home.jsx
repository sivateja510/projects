import React from "react";
import Navbar from "./Navbar";
import './home.css';
import Parts from "./Parts";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Home(){
    const navigate=useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('data'))
          navigate('/')
      })
    // console.log(localStorage.getItem('data'));
    return(
        <>
        <Navbar />
        <Parts/>
        </>
    )
}
export default Home;