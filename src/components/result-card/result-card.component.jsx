import React from 'react'
import Editable from '../editable-text/editable-text.component'
import './result-card.style.css'

export const Card = props =>{
   

    const handleDelete = () => {
        setTimeout(props.delete(props.result), 300)
    }
    console.log("inside resultcard - "+props.id)
    return(
        <div  className="item">
            <label className="checkbox-label">
                <input type="checkbox"/>
                <span className="checkbox-custom rectangular"></span>
            </label>

            <Editable result={props.result} editItem={props.editItem} id={props.id}/>               

            <div className="delete" onClick={handleDelete}>
                X
            </div>
            
        </div>
    )
}

export default Card