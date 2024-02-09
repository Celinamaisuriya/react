import React, { Component } from 'react'

export class UserGreeting extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           isLoggedIn : true
        // isLoggedIn : false
        }
    }

  render() {
    // Way 1 : Element Variables

    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>
    //         Welcome Celina
    //     </div>
    // }
    // else{
    //     message = <div> 
    //         Welcome Guest 
    //     </div>
    // }

    // return <div> {message} </div>

    // Way 2: if/else

    // if(this.state.isLoggedIn){
    //     return(
    //         <div>
    //             Welcome Celina
    //         </div>
    //     )
    // } else{ 
    //     return (
    //         <div>
    //              Welcome Guest
    //         </div>
    //     )
    //  }

    // Most Used 
    // Way 3 : Ternary Conditional Operator

    // return(
    //     this.state.isLoggedIn ?(
    //     <div> Welcome Celina </div> ) :
    //     (<div> Welcome Guest </div> )
    // )

    // Most Used 
    //Way 4 : Short Circuit Operator

    return this.state.isLoggedIn &&  <div> Welcome Celina </div> 
    
    // return (
    //   <div>
    //     <div> Welcome Celina </div> 
    //     <div> Welcome Guest </div>
    //   </div>
    // )
  }
}

export default UserGreeting
