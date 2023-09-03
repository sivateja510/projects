import React from 'react'
import './login.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHandSparkles } from "react-icons/fa";
import image from './images/image.jpg';
import image1 from './images/image1.png'
export default function Login() {
    const navigate = useNavigate();
    const [log, setlog] = useState(false);
    const [usename, setusname] = useState('');
    const [usepwd, setpwd] = useState('');
    const handlechange = (e) => {
        // console.log(e.target.value)
        setusname(e.target.value);
    }
    const handlepwd = (e) => {
        // console.log(e.target.value)
        setpwd(e.target.value);
    }
    const [users, setUsers] = useState('');
    const getUsers = async () => {
        try {
            const response = await fetch('http://localhost:8090/entry', {
                method: 'GET'
            });
            const result = await response.json();
            console.log(result);
            setUsers(result);
        }
        catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getUsers();
    }, []);
    
    const handleLogin = (e) => {
        // e.preventDefault();
        const  userr=users.find((user)=>user.Email === usename && user.Password === usepwd )
        if(userr=== undefined || userr==null )
        {
            window.alert("user not found");
            setlog(false);
            localStorage.removeItem('data');
        }
        else{
            localStorage.setItem('data',JSON.stringify(userr));
            window.alert(localStorage.getItem('data'));
            setlog(true);
        }
        
    }
    if (log) {
        navigate('/Home');
    }
    else{
        localStorage.removeItem('data');
    }
    const handleRegister=(e)=>{
        navigate('/Register');
    }



    return (
        <div className='max'>
            <div className='login_container'>
                <div className='left'>
                    <img src={image1} ></img>
                </div>
                <div className='right'>

                    <div className='labels'>
                        <h1>Welcome Back  <FaHandSparkles /></h1>
                        <div>
                            <form >
                                <div className='input-container'>
                                    <div>
                                        <label> Email</label>
                                        <input type='email' value={usename} onChange={handlechange} required></input>
                                    </div>
                                    <div>
                                        <label> Password</label>
                                        <input type='password' value={usepwd} onChange={handlepwd} required></input>
                                    </div>
                                </div>
                                <div className='btn-container'>
                                    <button onClick={handleLogin} > LOG IN</button>
                                    <h3>OR</h3>
                                    <button className='b' onClick={handleRegister}> Register</button>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
