import React,{useState,useEffect} from "react";
import '../styles/Marspage.scss'

import Navbar from "./Navbar";

const APIkey = "E1b82RjagTNq0SEYkFgmoS7XQNY7ay3HgPTmah2d";


export default function Mars(){

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    useEffect(()=>{
        fetch(`https://api.nasa.gov/insight_weather/?api_key=${APIkey}&feedtype=json&ver=1.0`)
        .then((response) => {
            if(!response.ok){
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                );
            }
            return response.json();
        })
        .then((data) => {
            console.log(data.validity_checks[1219])
            setData(data);
            setError(null);      
        })
        .catch((err) =>{
            console.log(err.message);
            setError(err.message);
            setData(null);
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])


    return(
        <>
        <Navbar/>
        <h1>Mars</h1>
        <div>
            <h3>Atmospheric Temperature Sensor</h3>
            <div>
                {loading && <div>Please Wait...</div>}
                {error && <div>{error} </div>}
                
            </div>
        </div>
        
        <div>

            <h3>atmospheric pressure sensor</h3>
        </div>

        <div>
            <h3>horizontal wind speed sensor</h3>
        </div>
        
        <div>
            <h3>wind direction sensor</h3>
        </div>
        </>
    )
}