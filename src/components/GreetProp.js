import React from 'react'

const GreetProp = (props) => {
    console.log(props)
    return (
        <div>
            <h1> 
                Hello {props.name} {props.heroname} 
            </h1>
            {props.children}
        </div> 
    ) 
}

export default GreetProp