import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './style.css'

export default function Display() {
    const [ indeedJobs, setIndeed ] = useState([]);

    // Component Mount Function
    useEffect(() => {
        searchJobs();
    }, []);

const indeedList = indeedJobs.map(job => <li>{job.title}</li>)

    const searchJobs = async () => {
        // Scrape Indeed
        // let indeedRes = await axios.get("http://localhost:3001/api/scrape/indeed");
        // let indeed = indeedRes.data;
        //     // Console log results
        // setIndeed(indeedRes.data)
        // console.log(indeed)
        // console.log(indeedJobs)

        axios.get('http://localhost:3001/api/scrape/indeed')
        .then(function (response) {
            console.log(response.status);

            if (response.status === 200)
                setIndeed(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });


            // Fill Table with Results
            // .then(res => {
            //     res.map()
            // })
    }

    return (
        <div>
            <ul>
                {indeedList}
            </ul>
        </div>
    )
}