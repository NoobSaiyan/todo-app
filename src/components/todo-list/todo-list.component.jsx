import React from 'react'
import {Card} from '../result-card/result-card.component'
import './todo-list.style.css'

export const List = props => {
    return(
        <div className="list">
            {props.items.map((item, index) => (
                <Card result={item} key={index} delete={props.delete}/>
            ))}
        </div>
    )
}