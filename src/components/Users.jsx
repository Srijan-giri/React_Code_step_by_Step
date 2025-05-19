import React from 'react'
import { Link } from 'react-router';
function Users() {
    const usersData = [
        { id: 1, name: 'Rahul' },
        { id: 2, name: 'Ayan' },
        { id: 3, name: 'Rakesh' },
        { id: 4, name: 'Amal' },
        { id: 5, name: 'Akash' }
    ];
    return (
        <div>
            <div>
                <h1>Users List Page</h1>
                <div style={{ marginLeft: '5px' }}>
                    {
                        usersData.map((user, index) => (
                            <div key={index}>
                                <h4><Link to={'/users/' + user.id}>{user.name}</Link></h4>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <h1>User List Page with Name URl</h1>
                <div style={{ marginLeft: '5px' }}>
                    {
                        usersData.map((user, index) => (
                            <div key={index}>
                                <h4><Link to={'/users/' + user.id + '/' + user.name}>{user.name}</Link></h4>
                            </div>
                        ))
                    }
                </div>

            </div >
        </div>
    )
}

export default Users