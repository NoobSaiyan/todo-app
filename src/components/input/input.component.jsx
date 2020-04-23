import React from 'react'
import './input.style.css'
class InputBox extends React.Component{
    state = {
        text: ""
    }
    
    handleChange = e => {
        this.setState({text: e.target.value})    
    }
    handleSubmit = e => {
        console.log(this.state.text)
        this.setState({text: ""});
        e.preventDefault()
    }
    render(){
        return (
            <form onSubmit = {this.handleSubmit}>
                <input value={this.state.text} onChange={this.handleChange} placeholder="Enter your task" />
                <input type="submit" value="Add"/>
            </form>
        )
    }
}
export default InputBox;