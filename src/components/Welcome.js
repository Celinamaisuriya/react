import React ,{ Component } from 'react'

class Welcome extends Component {
    render() { // Class Components
        const{name,heroname} = this.props

        // syntax
        // const {state1,state2} = this.props syntax
        
        return ( 
            <h1> Welcome {name} {heroname} </h1>
        )
    }
}
  
export default Welcome