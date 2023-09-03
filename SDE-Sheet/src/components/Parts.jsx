import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import {FaMegaport,FaLaptop,FaKey,FaFreeCodeCamp,FaLayerGroup,FaNotesMedical} from "react-icons/fa";
function Parts(){
    const navigate = useNavigate();
    const handlelogin=(data)=>{
        navigate('/'+data);
    }
    return(
        <>
        <div className='midiv'>
            
            <div className='boxes' onClick={()=>{handlelogin('Dsa')}}>
                <h1>DSA</h1>
                <FaMegaport className='large-icon'/>
            </div>
            <div className='boxes'onClick={()=>{handlelogin('Cfa')}}>
            <h1 >DBMS</h1>
            <FaLaptop className='large-icon'/>
            </div>
            <div className='boxes' onClick={()=>{handlelogin('Os')}}>
            <h1>OS</h1>
            <FaKey className='large-icon'/>
            </div>
            <div className='boxes' onClick={()=>{handlelogin('Practice')}}>
            <h1>Practice</h1>
            <FaFreeCodeCamp className='large-icon'/>
            </div>
            <div className='boxes' onClick={()=>{handlelogin('Tests')}}>
            <h1>Tests</h1>
            <FaNotesMedical className='large-icon'/>
            </div>
            <div className='boxes' onClick={()=>{handlelogin('Discussions')}}>
            <h1>Discussions</h1>
            <FaLayerGroup className='large-icon'/>
            </div>
            
        </div>
        </>
    )
}
export default Parts;