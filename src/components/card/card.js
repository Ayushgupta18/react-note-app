import React from 'react'
import './card.css'
import CardNavbar from '../card_navbar/card_navbar.js'

export default function Card(props) {
    const body="the body of the card it is going to be the body of the card it is going to be the body of the cardit is going to be the body of the card it is going to be the body of the card"
    return (
        <>
            <div className="card">
                <CardNavbar openPopup={props.openPopup} setPopup={props.setPopup} body={body}/>
                <p>the body of the card it is going to be the body of the card it is going to be the body of the cardit is going to be the body of the card it is going to be the body of the card</p>
            </div>
            <br/>
        </>
    )
}
