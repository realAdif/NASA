import React,{useEffect, useState} from 'react'
import { Image} from "semantic-ui-react";

export default function Homepage(){
    const APIkey = "E1b82RjagTNq0SEYkFgmoS7XQNY7ay3HgPTmah2d";

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(()=>{
        fetch('https://api.nasa.gov/planetary/apod?api_key='+APIkey)
        .then((response) => {
            if(!response.ok){
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                );
            }
            return response.json();
        })
        .then((data) => {
            console.log(data.url)
            setData(data.url);
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
        <div>
            {loading && <div>Please Wait...</div>}
            {error && <div>{error} </div>}
            <img src={data} alt='Nasa'className='image' />
            
        </div>
    )
}