import React from "react";
import Navbar from "./Navbar";
import Tablee from "./Tablee";
import { useState,useEffect } from "react";
function Tests (){
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
    // console.log(questions);
    const lev=["Easy","Hard","Medium"];

    return(
        <>
        <Navbar/>
        <Tablee top={questions} topi={lev} />
        </>
    )
}

export default Tests;