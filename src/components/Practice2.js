import React from 'react';
import axios from 'axios';
class Practice2 extends React.Component{
    
    constructor(){
        super();
        this.state = {
            name : '',
            number : ''
        }
    }
    handleChange = (e) =>
    {
        this.setState({[e.target.name] : e.target.value})
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response => console.log(response))

    }
    render(){
        const {name,number} = this.state;
        return(
            <>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" value={name} onChange={this.handleChange}/>
                <input type="test" name="number" value={number} onChange={this.handleChange}/>
                <input type="submit" name="submit" onChange={this.handleChange}/>
            </form>
            </>
        )
    }
}
export default Practice2;