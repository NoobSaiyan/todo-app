import React from 'react'
import './result-card.style.css'

export const Card = props => {
    
    console.log( "Checking card result -" + props.result);
    const handleDelete = () => {
        setTimeout(props.delete(props.result), 300)
    }
    return(
        <div  className="item">
            <label className="checkbox-label">
                <input type="checkbox"/>
                <span className="checkbox-custom rectangular"></span>
            </label>

            <div className="result">
               {props.result} 
               
            </div>

            <div className="edit">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z"/></svg>
            </div>

            <div className="delete" onClick={handleDelete}>
                X
            </div>
            
        </div>
    )
}