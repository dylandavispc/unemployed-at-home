import React, { useState } from 'react';
import Accordion from './Accordion'
import Display from './Display'
import './style.css';

export default function JobBoard() {
  return (
    <section className="JobBoard-container">
      <div className="JobBoard-menu">
				<header>
					<h2>Job Board Menu</h2>
				</header>
        <Accordion />
      </div>
      <div className="JobBoard-display">
        <Display />
      </div>
    </section>
  );
}