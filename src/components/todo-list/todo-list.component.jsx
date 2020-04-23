import React from 'react'
import './todo-list.style.css'

export const List = props => {
    return(
        <div className='list'>
            {props.items.map((item, index) => (
                <div className="item"  key={index}>{item}</div>
            ))}
        </div>
    )
}