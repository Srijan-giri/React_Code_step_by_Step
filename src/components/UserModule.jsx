import style from '../css/userModule.module.css';

function UserModule(){
    return(
        <div >
            <div className={style.divDesign}>
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" className={style.img} />
                <div className={style.content}>
                     <h3>Anil Sadhu</h3>
                     <p>Software Developer</p>
                </div>
            </div>
        </div>
    )
}

export default UserModule;