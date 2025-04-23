function Todo(){
    function callFun(){
        alert('function called');
    }
    return(
        <div>
            <h1>JSX Exercise</h1>
            <h2>Anil Sadhu Todos</h2>
            <img src="https://picsum.photos/536/354" 
                alt="road photo" 
                class="photo"/>
            <ul>
                <li>Invent New Traffic Light</li>
                <li>Reharse a movie scene</li>
                <li>Improve the spectrum technology</li>
            </ul>
            <button onClick={callFun}>Click Me</button>
        </div>
    )
}

export default Todo;