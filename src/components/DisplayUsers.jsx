function DisplayUsers({ users }) {
    return (
        <div>
            <h3>Display Users</h3>
            <ul>
                {
                    users && users.length > 0 ?
                        users.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                        : 'No Users Present'
                }
            </ul>

        </div>
    )
}

export default DisplayUsers;