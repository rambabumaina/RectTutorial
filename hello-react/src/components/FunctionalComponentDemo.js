import React from 'react'


// function Greet(){
//     return <h1> Hi Ram</h1>
// }


export const Greet = props => {
    console.log(props);
    return (
        <div>
            <h1>
                Hi {props.name} {props.lastName}
            </h1>
            {props.children}
        </div>
    )
}
// export default Greet;