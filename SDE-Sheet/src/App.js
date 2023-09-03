import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Dsa from './components/Dsa';
import Os from './components/Os';
import Cfa from './components/Cfa';
import Practice from './components/Practice';
import Tests from './components/Tests';
import Discussions from './components/Discussions';
import Tablee from './components/Tablee';
import Register from './components/Register';
function App() {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path='/Home' element={<Home />}/>
      <Route path='/' element={<Login />}/>
      <Route path='/Dsa' element={ <Dsa />}/>
      <Route path='/Os' element={ <Os />}/>
      <Route path='/Cfa' element={ <Cfa />}/>
      <Route path='/Practice'element={ <Practice />}/>
      <Route path='/Tests' element={ <Tests />}/>
      <Route path='/Discussions' element={ <Discussions />}/>
      <Route path='/Dsa' element={ <Dsa />}/>
      <Route path='/Tablee' element={ <Tablee />}/>
      <Route path='/Register' element={ <Register />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
