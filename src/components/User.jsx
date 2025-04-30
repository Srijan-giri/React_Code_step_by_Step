function User({user,cardStyle,textColor}){ 
    return(
        <div>
            <div style={cardStyle}>
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt=""  style={{width:'200px'}}/>
                <div style={{padding:'5px',color:textColor}}>
                    <h3>{user.name}</h3>
                    <h3>{user.position}</h3>
                </div>
            </div>
              
        </div>
    )
}

export default User;