import React from 'react';
import '../styles/homepage.scss';
import { Link } from 'react-router-dom'
import Directory from '../components/Directory'

const HomePage = () => (
    <div className='homepage'>
        <div className="homepage-top">
            <h1>Welcome to Crown Clothing</h1>
        </div>
        <Directory />
        <div className="view-all">
            <Link to={`/shop`}>
                <button className="view-all">View All</button>
            </Link>
        </div>
    </div>
);

export default HomePage;