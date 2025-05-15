import React from 'react'
import { Link, NavLink, Outlet } from 'react-router'

function College() {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>College Page</h1>
            <h3 style={{ textAlign: 'center' }}><Link to={'/'} >Back to Home Page</Link></h3>
            <div className='college'>
                {/* <NavLink to="student" className='nav-link'>Student</NavLink> */}
                <NavLink to="" className='nav-link'>Student</NavLink>
                <NavLink to="department" className='nav-link'>Department</NavLink>
                <NavLink to="Student-details" className='nav-link'>Student Details</NavLink>
                <Outlet />

                {/*  An <Outlet/> should be used in parent route elements to render their child route elements */}
            </div>


        </div>
    )
}

export default College