import React from "react";
// import props from 'prop-types'
class Child extends React.Component{
    constructor(props)
    {
        super(props);
        this.handleClick.bind(this);
    }
    handleClick = (e) => {
      // Simply call the setStateOfParent function from 
      // prop and pass required argument
      this.props.changeState(e.target.value);
    }
  render(){
    return(
      <>
       <input onChange={()=> this.handleClick()}/>
      </>
   
       )
    }
    
    
  }


export default Child;