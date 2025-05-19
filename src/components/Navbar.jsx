import React from 'react'
import { Link, Outlet } from 'react-router'

function Navbar() {
    return (
        <>
            <div className='header'>
                <div>
                    <Link to={"/"} className='link'> <h2>Logo</h2></Link>
                </div>
                <div>
                    <ul>
                        <li><Link to={'/'} className='link'>Home</Link></li>
                        <li><Link to={'/about'} className='link'>About</Link></li>
                        <li><Link to={'/contact'} className='link'>Contact</Link></li>
                        <li><Link to={'/login'} className='link'>Login</Link></li>
                        <li><Link to={'/college'} className="link">College</Link></li>
                        <li><Link to={'/users'} className='link'>Users</Link></li>
                        <li><Link to={'/users/list'} className='link'>List</Link></li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar