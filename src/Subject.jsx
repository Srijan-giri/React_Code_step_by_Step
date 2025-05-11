import React, { useContext } from 'react'
import { SubjectContext } from './CreateContext'

function Subject() {
    const subject = useContext(SubjectContext);
    return (
        <div style={{ backgroundColor: 'green', padding: '10px' }}>
            <h1>Subject Component</h1>
            <h2 style={{ color: 'skyblue' }}>Subject is : {subject}</h2>

        </div>
    )
}

export default Subject