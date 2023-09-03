import React, { useEffect } from "react";
import Navbar from "./Navbar";
import './discussions.css';
import { useState } from "react";
import Discuss from "./Discuss";
// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Discussions() {
  const navigate=useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('data'))
          navigate('/')
      })
  return (
    <>
      <Navbar />
      <Discuss/>
    </>
  )
};
export default Discussions;