import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Home from "./Home";
import './compounds.css';
function Daata(props) {
    const [topic, settopic] = useState('');
    const handlechange = (e) => {
        // console.log(e.target.value);
        settopic(e.target.value);

    }
    const [dataa, setdata] = useState('');

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const openNav = () => {

        setSidebarOpen(true);
    };
    const closeNav = (e) => {
        setSidebarOpen(false);
    };

    const [topics, setTopics] = useState([]);

    const [Algos, setAlgos] = useState([]);
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
    const getAlgos = async () => {
        try {
            const response = await fetch('http://localhost:8090/' + props.topi, {
                method: 'GET'
            });

            const result = await response.json();
            setAlgos(result);
            // console.log(Algos);
        }
        catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getTopics();
    }, []);
    useEffect(() => {
        getAlgos();
    }, []);

    const [dataaa, setdataa] = useState(null);
    const [topi, setTopic] = useState([]);
    const findTopic = (topi) => {
        const foundTopic = topics.find((topp) => topp.sub === topic);
        // console.log(topics);
        if (foundTopic) {
            setdataa(foundTopic);
        } else {
            console.log("No Data");
        }
    };


    useEffect(() => {
        if (topic !== '') {
            findTopic(topic);
        }
    }, [topic, topi]);

    // const [topi, setTopic] = useState([]);
    const [algoo, setalgoo] = useState([]);
    const findalgoo = (topi) => {
        const foundTopic = Algos.find((topp) => topp.sub === topic);
        // console.log(topics);
        if (foundTopic) {
            setdataa(foundTopic);
        } else {
            console.log("No Data");
        }
    };


    useEffect(() => {
        if (topic !== '') {
            findalgoo(topic);
        }
    }, [topic, topi]);



    useEffect(() => {
        console.log(dataaa);
    }, [dataaa]);

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
                                    <input
                                        type="radio"
                                        name="datastruct"
                                        value={item.sub}
                                        onChange={handlechange}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="ldown">
                        <h3>{props.topi}</h3>
                        <div>
                            {Algos.map((item, index) => (
                                <div className="lab" key={index}>
                                    <label>{item.sub}</label>
                                    <input
                                        type="radio"
                                        name="datastruct"
                                        value={item.sub}
                                        onChange={handlechange}
                                    />
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
                                                            <input
                                                                type="radio"
                                                                name="datastruct"
                                                                value={item.sub}
                                                                onChange={handlechange}
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="ldown">
                                                <h3>{props.topi}</h3>
                                                <div>
                                                    {Algos.map((item, index) => (
                                                        <div className="lab" key={index}>
                                                            <label>{item.sub}</label>
                                                            <input
                                                                type="radio"
                                                                name="datastruct"
                                                                value={item.sub}
                                                                onChange={handlechange}
                                                            />
                                                        </div>
                                                    ))}
                                                </div>

                                            </div>
                                        </div>
                                    </>
                                }
                            })()}

                        </div>
                        {(() => {
                            if (!sidebarOpen && dataaa != null) {

                                return (
                                    <div className="content" >

                                        <p>{dataaa.sub}</p>
                                        <img src={dataaa.src} className="imaag" />
                                        <div className="para">
                                            <p>{dataaa.Desc}</p>
                                        </div>

                                    </div>
                                )

                            }
                        })()}

                    </>
                </div>
            </div>
        </>
    )
}
export default Daata;