import React, { useState, useEffect } from 'react';
import axios from 'axios'
import JobCard from './JobCard'
import './style.css'

export default function Display() {
    const [ indeedJobs, setIndeed ] = useState([]);
    let searchTerm = "Full Stack Web Developer"

    // Component Mount Function
    useEffect(() => {
        searchJobs();
    }, []);

    const searchJobs = async () => {
        // Indeed Search
        axios.get('http://localhost:3001/api/scrape/indeed')
        .then(function (response) {
            console.log(response.status);

            if (response.status === 200)
                setIndeed(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div className="scroll">
            <div className="searchTerm">
                {searchTerm}
                <hr />
            </div>
            <JobCard indeedJobs={indeedJobs} />
        </div>
    )
}