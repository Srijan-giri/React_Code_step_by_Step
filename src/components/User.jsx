function User({user}){
    const divColor = {border:'1px solid black',width:'200px', margin:'10px'}
    return(
        <div>
            <div style={divColor}>
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt=""  style={{width:'200px'}}/>
                <div style={{padding:'5px'}}>
                    <h3>{user.name}</h3>
                    <h3>{user.position}</h3>
                </div>
            </div>
              
        </div>
    )
}

export default User;