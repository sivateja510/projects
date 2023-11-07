import React from 'react'
import './register.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHandSparkles } from "react-icons/fa";
import draw2 from './images/draw2.png';
import image1 from './images/image1.png';
export default function Register() {
    const navigate = useNavigate();
    const [log, setlog] = useState(false);
    const [usename, setusname] = useState('');
    const handlename = (e) => {
        // console.log(e.target.value)
        setusname(e.target.value);
    }
    const [usepwd, setpwd] = useState('');
    const handlepwd = (e) => {
        // console.log(e.target.value)
        setpwd(e.target.value);
    }
    const [usepwdr, setpwdr] = useState('');
    const handlepwdr = (e) => {
        // console.log(e.target.value)
        setpwdr(e.target.value);
    }
    const [emaill, setemail] = useState('');
    const handleemail = (e) => {
        // console.log(e.target.value)
        setemail(e.target.value);
    }
    // if (usepwd !== usepwdr) {
    //     alert("Passwords don't match!");
    //     return;
    //   }

    //   // Create a JSON object with the data





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

    const userData = {
        username: usename,
        password: usepwd,
        email: emaill,
    };
    const handleLogin = (e) => {
        e.preventDefault();
        if (!userData.username || !userData.password || !userData.email) {
            console.error('One or more fields are empty. Please fill in all required fields.');
            window.alert("empty detected");
            return; // Exit the function if any field is empty
        }
        
        axios.post('http://localhost:8090/entry', userData).then((response) => {
            
            console.log('Data sent successfully:', response.data);
            
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    }
    
    




    return (
        <div className='max'>
            <div className='login_container'>
                <div className='left'>
                    <img src={draw2} className='imagg' ></img>
                </div>
                <div className='right'>

                    <div className='labels'>
                        <h1>SignUp  <FaHandSparkles /></h1>
                        <div>
                            <form >
                                <div className='input-container'>
                                    <div>
                                        <label> FullName</label>
                                        <input type='text' value={usename} onChange={handlename} required></input>
                                    </div>
                                    <div>
                                        <label> Email</label>
                                        <input type='email' value={emaill} onChange={handleemail} required></input>
                                    </div>
                                    <div>
                                        <label> Password</label>
                                        <input type='password' value={usepwd} onChange={handlepwd} required></input>
                                    </div>
                                    <div>
                                        <label> Repeat Password</label>
                                        <input type='password' value={usepwdr} onChange={handlepwdr} required></input>
                                    </div>
                                </div>
                                <div className='btn-container'>
                                    <button onClick={handleLogin} type='submit' > Register</button>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
