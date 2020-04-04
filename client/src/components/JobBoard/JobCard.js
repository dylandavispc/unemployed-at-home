import React, { useState, useEffect } from 'react';
import './style.css';

export default function JobCard(props) {
    const [jobs, setJobs] = useState([]);
    const [indeedList, setIndeedList] = useState("No Information")

    useEffect(() => {
        setJobs(props.indeedJobs);
        insertJobs();
        console.log(jobs, props.indeedJobs)
    }, [props, jobs]);

    const insertJobs = () => {
        let insert = jobs.map(job => 
            <li>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{job.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{job.company}</h6>
                        <p className="card-text">{job.descriptions[0]}</p>
                        <a href={job.link} className="card-link">Apply</a>
                        <a href="#" className="card-link">{job.date}</a>
                    </div>
                </div>
            </li>)
        setIndeedList(insert)
    };

    return (
        <ul>
            {indeedList}
        </ul>
    )
};