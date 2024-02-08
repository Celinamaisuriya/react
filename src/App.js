import React, {Component} from 'react';
import './App.css';
// import Greet from './components/Greet';

// import { Greet } from './components/Greet' //named export
// import Welcome from './components/Welcome';
// import GreetProp from './components/GreetProp';
// import StateMessage from './components/StateMessage';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'

class App extends Component{
  render(){
    return (
      <div className="App">
        {/* <Greet />
        <GreetProp name="Bruce" heroname="Batman" > 
          <p> This is Children props </p> 
        </GreetProp>

        <GreetProp name="clark" heroname="Superman">
          <button> Action </button>
        </GreetProp> 

        <GreetProp name="Diana" heroname="Wonder Woman" />*/} 
        
        {/* <Welcome name="Bruce" heroname="Batman" />
        <Welcome name="clark" heroname="Superman" />
        <Welcome name="Diana" heroname="Wonder Woman" /> 
         */}

         {/* <StateMessage /> */} 

         {/* <Counter/> */}

         {/* <FunctionClick /> */}

         <ClassClick />
      </div>
    );
  }
}
 

export default App;
