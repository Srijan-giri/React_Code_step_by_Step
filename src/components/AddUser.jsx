import React from 'react'

export default function AddUser({ setUser, handleUsers }) {

    return (
        <div>
            <h3>Add User</h3>
            <input type="text" placeholder='Enter Name' onChange={(event) => setUser(event.target.value)} />
            <button onClick={handleUsers}>Add</button>
        </div>
    )
}
