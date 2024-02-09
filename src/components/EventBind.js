import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message : 'Hello'
      }

      this.clickHandler = this.clickHandler.bind(this)
    }
    
    // clickHandler(){
    //     this.setState({
    //         message : 'Good Bye'
    //     })
    //     console.log(this)
    // }

    // Way 4:
    clickHandler = () => {
        this.setState({
            message : 'Good Bye'
        })
        console.log(this)
    }

  render() {
    return (
      <div>
        <div> {this.state.message} </div>

        {/* Way 1 :
            <button onClick={this.clickHandler.bind(this)}> Click </button>  */}
       
        {/* Way 2 :
            <button onClick={() => this.clickHandler()}> Click </button> */}

        {/* Way 3 : Best Approch */}
        <button onClick={this.clickHandler}> Click </button> 

      </div>
    )
  }
}

export default EventBind
