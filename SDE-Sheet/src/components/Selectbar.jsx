import React from "react";
import { useState } from "react";
import Tablee from "./Tablee";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Home";
import './compounds.css';
function Selectbar(props) {
    const navigate = useNavigate();
    const [topic, settopic] = useState('');
    const handlechange = (e) => {
        console.log(e.target.value);
        settopic(e.target.value);
    }
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [inputtValue, setinputtValue] = useState('');

    const handleOptionChange = (event) => {
        const optionValue = event.target.value;
        if (selectedOptions.includes(optionValue)) {
            const updatedOptions = selectedOptions.filter((option) => option !== optionValue);
            setSelectedOptions(updatedOptions);
        } else {
            const updatedOptions = [...selectedOptions, optionValue];
            setSelectedOptions(updatedOptions);
        }
        // window.alert(optionValue);
    };
    const [selectedOptions1, setSelectedOptions1] = useState([]);
    const [inputtValue1, setinputtValue1] = useState('');

    const handleOptionChange1 = (event) => {
        const optionValue = event.target.value;
        if (selectedOptions1.includes(optionValue)) {
            const updatedOptions = selectedOptions1.filter((option) => option !== optionValue);
            setSelectedOptions1(updatedOptions);
        } else {
            const updatedOptions = [...selectedOptions1, optionValue];
            setSelectedOptions1(updatedOptions);
        }
    };


    const handleinputtChange = (event) => {
        setinputtValue(event.target.value);
    };
    const displaySelectedOptions = selectedOptions1;
    // console.log(selectedOptions)
    // console.log(selectedOptions1)
    // const handleprint = (e) => {

    //     e.preventDefault();
    //     // localStorage.setItem(topic,JSON.stringify(selectedOptions));
    //     // localStorage.setItem(topic,JSON.stringify(selectedOptions));
    //     // navigate('/Tablee');
    // }





    const [sidebarOpen, setSidebarOpen] = useState(false);
    const openNav = () => {
        setSidebarOpen(true);
    };
    const closeNav = (e) => {
        setSidebarOpen(false);
    };

    const [topics, setTopics] = useState([]);
    const [Algos, setAlgos] = useState([]);
    const levels = ['Easy', 'Medium', 'Hard'];
    const getTopics = async () => {
        try {
            const response = await fetch('http://localhost:8090/' + props.top, {
                method: 'GET'
            });

            const result = await response.json();
            setTopics(result);
        }
        catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getTopics();
    }, []);


    const [questions, setTopics1] = useState([]);
    const getTopics1 = async () => {
        try {
            const response = await fetch('http://localhost:8090/Practice', {
                method: 'GET'
            });

            const result = await response.json();
            setTopics1(result);
        }
        catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getTopics1();
    }, []);


    const filteredQuestions = questions.filter(item => 
        
        selectedOptions.includes(item.sub) && selectedOptions1.includes(item.level)
      );
    // console.log(topics)

    return (
        <>
            <div className="maincom">
                <div className="leftm">
                    <div className="ltop">
                        <h3>{props.top}</h3>
                        <div>
                            {topics.map((item, index) => (
                                <div className="lab" key={index}>
                                    <label>{item.sub}</label>
                                    <input type="checkbox" name="datastruct" value={item.sub} onChange={handleOptionChange} />
                                </div>
                            ))}
                        </div>
                        <h3>Levels</h3>
                        <div>
                            {levels.map((item, index) => (
                                <div className="lab" key={index}>
                                    <label>{item}</label>
                                    <input type="checkbox" name="datastruct1" value={item} onChange={handleOptionChange1} />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
                <div className="rightm">
                    <>
                        <div className="dropd">
                            <button className="openbtn" onClick={openNav} id={sidebarOpen ? 'sidebaropen' : 'sidebar'}>☰</button>
                            {(() => {
                                if (sidebarOpen) {
                                    return <>
                                        <div className="sidebar">
                                            <div className="ltop">
                                            <h3 className="clo" onClick={closeNav}>x</h3>
                                                <h3>{props.top}</h3>
                                                
                                                <div>
                                                    {topics.map((item, index) => (
                                                        <div className="lab" key={index}>
                                                            <label>{item.sub}</label>
                                                            <input type="checkbox" name="datastruct" value={item.sub} onChange={handleOptionChange} />
                                                        </div>
                                                    ))}
                                                </div>
                                                <h3>Levels</h3>
                                                <div>
                                                    {levels.map((item, index) => (
                                                        <div className="lab" key={index}>
                                                            <label>{item}</label>
                                                            <input type="checkbox" name="datastruct1" value={item} onChange={handleOptionChange1} />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </>
                                }
                            })()}

                        </div>
                        <div className="contentt" id={sidebarOpen ? 'sidebaropen' : 'sidebar'}>
                            
                                <Tablee top={filteredQuestions} topi={selectedOptions1} />
                            

                        </div>
                    </>
                </div>
            </div>
        </>
    )
}
export default Selectbar;
