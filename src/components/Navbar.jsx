import React from 'react'
import { Link } from 'react-router'

function Navbar() {
    return (
        <div>
            <Link to="/home">
                <h1>Home</h1>
            </Link>
            <Link to="/contact">
                <h1>Contact</h1>
            </Link>
            <Link to="/about">
                <h1>About</h1>
            </Link>
        </div>
    )
}

export default Navbar