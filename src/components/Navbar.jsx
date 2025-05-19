import React from 'react'
import { Link, NavLink, Outlet } from 'react-router'

function Navbar() {
    return (
        <>
            <div className='header'>
                <div>
                    <Link to={"/"} className='link'> <h2>Logo</h2></Link>
                </div>
                <div>
                    <ul>
                        {/* NavLink vs Link  */}
                        {/* NavLink is a navigation link that has active class and Link is a navigation link that doesn't have active class */}

                        <li><NavLink to={'/'} className='link'>Home</NavLink></li>
                        <li><NavLink to={'/about'} className='link'>About</NavLink></li>
                        <li><NavLink to={'/contact'} className='link'>Contact</NavLink></li>
                        <li><NavLink to={'/login'} className='link'>Login</NavLink></li>
                        <li><NavLink to={'/college'} className="link">College</NavLink></li>
                        <li><NavLink to={'/users'} className='link'>Users</NavLink></li>
                        <li><NavLink to={'/users/list'} className='link'>List</NavLink></li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar