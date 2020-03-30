import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './style.css'

export default function Display() {
    const [ indeedJobs, setIndeed ] = useState([]);

    // Component Mount Function
    useEffect(() => {
        searchJobs();
    }, []);

    const searchJobs = () => {
        //Scrape Indeed
        axios.get("http://localhost:3001/api/scrape/indeed")
            .then(res => console.log(res))
    }

    return (
        <div>
            
        </div>
    )
}