import React, { useState } from 'react';
import './style.css';

export default function Google() {
    return(
        <div>
            <form action="https:/www.google.com/search" method="GET">
                <input type="text" name="q" placeholder="" />
                <input type="submit" value="Google Search" />
            </form>
        </div>
    );
};