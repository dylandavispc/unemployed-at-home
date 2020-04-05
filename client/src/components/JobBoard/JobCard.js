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
            <li className="cardList">
                <div className="card">
                    <div className="card-body">
                        <div className="card-title">{job.title}</div>
                        <div className="card-subtitle text-muted">{job.company}</div>
                        <div className="card-subtitle mb-2 text-muted">{job.location}</div>
                        <p className="card-text">{job.descriptions[0]}</p>
                        <a href={job.link} target="_blank" className="card-link">Apply</a>
                        <div cldivssName="card-link">{job.date}</div>
                    </div>
                </div>
            </li>)
        setIndeedList(insert)
    };

    return (
        <ul className="list">
            {indeedList}
        </ul>
    )
};