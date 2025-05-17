import React from 'react'
import { Link, Outlet } from 'react-router'

function Navbar() {
    return (
        <div>
            <div className='header'>
                <div>
                    <Link to={"/"} className='link'> <h2>Logo</h2></Link>
                </div>
                <div>
                    <ul>
                        <li><Link to={'/'} className='link'>Home</Link></li>
                        <li><Link to={'/in/user/about'} className='link'>About</Link></li>
                        <li><Link to={'/in/user/contact'} className='link'>Contact</Link></li>
                        <li><Link to={'/in/user/login'} className='link'>Login</Link></li>
                        <li><Link to={'/college'} className="link">College</Link></li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </div>

    )
}

export default Navbar