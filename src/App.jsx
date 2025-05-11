import React, { useState } from 'react'
import College from './College'
import { SubjectContext } from './CreateContext'

function App() {

    const [subject, setSubject] = useState('');
    return (
        <div style={{ backgroundColor: 'yellow', padding: '10px' }}>
            <SubjectContext.Provider value={(subject !== '') ? subject : 'English(By Default)'}>
                {/* here English is by default value and it redirects to the useContext */}

                <select onChange={(event) => setSubject(event.target.value)} value={subject}>
                    <option value="">Select</option>
                    <option value="physics">Physics</option>
                    <option value="history">History</option>
                    <option value="geography">Geography</option>
                </select>

                <h1>Context API</h1>

                <button onClick={() => setSubject('')}>Clear</button>
                <College />

            </SubjectContext.Provider>
        </div>
    )
}

export default App