function User({ displayUser, name, onClick }) {

    return (
        <div>
            {/* <button onClick={displayUser}>Display User</button> */}
            <button onClick={() => displayUser(name)}>Display User</button>
            <button onClick={onClick}>Get User</button>
        </div>
    )
}

export default User;