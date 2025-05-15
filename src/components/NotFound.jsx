import React from 'react'
import { Link } from 'react-router'

function NotFound() {
    return (

        <div style={{ textAlign: "center" }}>
            <h1>Page Not Found</h1>
            <Link to={"/"}><h3>Back to Home</h3></Link>
            <img src="https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found-1024x576.png" alt="" width={"60%"} />
        </div>

    )
}

export default NotFound