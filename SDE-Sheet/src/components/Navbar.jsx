import './Navbar.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Navbar() {
    const navigate=useNavigate();
    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        navigate(selectedValue);
    };
    return (
        <>
            <nav id='nav'>
                <li id='one'>CSE World</li>
                <ul id='ull'>
                    <li><Link to='/Home' >Home</Link></li>
                    <li><Link to='/' >Logout</Link></li>
                    <li><Link to='/Discussions' >Discussions</Link></li>
                    {/* <li><Link to='/DSA' >Logout</Link></li> */}
                </ul>
                <select onChange={handleSelectChange} className='sel'>
                    <option  selected>Select</option>
                    <option value="/Home"><Link to='/Home'>Home</Link></option>
                    <option value="/"><Link to='/'>Logout</Link></option>
                    <option value="/Discussions"><Link to='/Discussions'>Discussions</Link></option>
                </select>
            </nav>
        </>
    )
}
export default Navbar;

