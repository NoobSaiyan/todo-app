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
        const {addItem} = this.props;
        e.preventDefault()
        addItem(this.state.text)
        //timepass logging text of textbox
        console.log(this.state.text)
        //clearing
        this.setState({text: ""})
        
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