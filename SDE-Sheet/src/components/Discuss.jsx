import React from "react";
import './discussions.css';
import { useState } from "react";
import { useEffect } from "react";
function Discuss(){
    const [collapsibleItems, setCollapsibleItems] = useState(Array(50).fill(false));

  const toggleCollapsible = (index) => {
    const updatedItems = [...collapsibleItems];
    updatedItems[index] = !updatedItems[index];
    setCollapsibleItems(updatedItems);
  };
  const [data,setdata]=useState([]);
const getTopics=async()=>{
  try{
    const response=await fetch("http://localhost:8090/Discussions",{
      method:'GET'
    });
    const result=await response.json();
    setdata(result);
  }
  catch(error){
    console.log(error);
  }
}
useEffect(()=>{
  getTopics();
},[]);
return (
    <>
      <h1 id="htag"></h1>
      <div className="maindis">
        <div id='contentt'>
          {data.map((pro, index) => (
            <div key={index}>
              <button
                type="button"
                id={`collapsible${collapsibleItems[index] ? 'active' : 'notactive'}`}
                className={`collapsible ${collapsibleItems[index] ? 'active' : 'notactive'}`}
                onClick={() => toggleCollapsible(index)}>
                {pro.sub}
              </button>
              <div className={`contnt ${collapsibleItems[index] ? 'active' : ''}`}>
                <p>
                  {pro.Data}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
  
}
export default Discuss;