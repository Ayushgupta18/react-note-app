import React from 'react'
import './card.css'
import CardNavbar from '../card_navbar/card_navbar.js'

export default function Card(props) {
    return (
        <>
            <div className="card">
                <CardNavbar setPopup={props.setPopup} body={props.content} title={props.title} id={props.id} fillUser={props.fillUser}/>
                <hr/>
                <p style={{whiteSpace:'pre-wrap', color:'#FFFFFE',height:'250px',overflow:'auto'}}>{props.content}</p>
            </div>
            <br/>
        </>
    )
}
