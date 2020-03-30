import React, { useState } from 'react';
import './style.css';

export default function Google() {
    return(
        <div>
            <form action="https:/www.google.com/search" method="GET">
                <input className="searchBox" type="text" name="q" placeholder="" />
                {/* <input className="submit" type="submit" value="Google Search" /> */}
            </form>
        </div>
    );
};