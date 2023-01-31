import React from "react";
// import { ChildContextProvider } from "react";
import Child from './Child';
class Main extends React.Component{
    constructor()
    {
        super();
        this.setStateOfParent.bind(this);
        this.state = {
            text : "Hello"
        }
    }

    setStateOfParent = (newTitle) => {
      this.setState({text: newTitle});
    }

  render(){
    return(
        <>
        <h1>{this.state.text}</h1>
        <Child changeState={this.setStateOfParent}/>
        </>
    )
  }
}

export default Main;