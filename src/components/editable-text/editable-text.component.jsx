import React from 'react'
import './editable-text.style.css'

class Editable extends React.Component{
    state = {
        editing:false
    }
    handleClick = e => {
      e.preventDefault()
        this.setState(
          prevState => ({
            editing: !prevState.editing
          }),
          () =>{
            if(this.editInput){
              this.editInput.focus()
            }
          }
        )
        
    }
    handleChange = e => {
      let id = this.props.id
      this.props.editItem(e.target.value, id)
    }
    render(){
        console.log("editable text - "+this.props.id)
        return(
            <form onSubmit={this.handleClick} className="container"> 
                {this.state.editing ? 
                    (<input className="edit-box" ref={node => this.editInput = node} onChange={this.handleChange} type="text" value={this.props.result} />) 
                    : 
                    (<span className="display">{this.props.result}</span>)
                }
              <button className="edit">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z"/></svg>
              </button>
              </form>
        )
    }
}
export default Editable