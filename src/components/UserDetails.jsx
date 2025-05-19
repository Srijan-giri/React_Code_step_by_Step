import React from 'react'
import { useParams } from 'react-router'

function UserDetails() {

    const params = useParams();
    console.log(params);
    return (
        <div>
            <h1>User Details Page</h1>
            <h2>User Id : {params.id}</h2>
            {
                params.name && <h2>User Name : {params.name}</h2>
            }
        </div>
    )
}

export default UserDetails