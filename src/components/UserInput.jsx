
// Before React 19

// import { forwardRef } from "react"

// function UserInput(props, ref) {
//     return (
//         <div>
//             <input type="text" ref={ref} />
//         </div>
//     )
// }

// export default forwardRef(UserInput);


// After React 19

function UserInput(props) {
    return (
        <div>
            <input type="text" ref={props.ref1} placeholder="Enter Name" />
            <br />
            <br />
            <input type="password" ref={props.ref2} placeholder="Enter Password" />
        </div>
    )
}

export default UserInput;