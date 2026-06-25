import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <div className="navbar">
                <h5>React Learning</h5>

                <ul class="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

                <button class="nav-btn">Get Started</button>
            </div>
        </>
    );
}

export default Navbar;