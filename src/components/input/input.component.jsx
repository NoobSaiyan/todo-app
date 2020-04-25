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
        //testing input in console
        console.log( "Checking input value -" + this.state.text)
        //clearing
        this.setState({text: ""})
        
    }
    render(){
        return (
            <form onSubmit = {this.handleSubmit}>
                <input required className="txt" value={this.state.text} onChange={this.handleChange} placeholder="Enter your task" />
                <input className="button" type="submit" value="+"/>
            </form>
        )
    }
}
export default InputBox;