import React from 'react'
import './card_navbar.css'
export default function Card_navbar(props) {
    const handleClick = ()=>{
        props.openPopup();
        props.setPopup("Notes title",props.body)
    }
    return (
        <div className="card-navbar">
            <span style={{fontSize:'32px',color:'#A7A9BE'}}>Note Title</span>
            <div className="rigth-side">
                <span onClick={handleClick} style={{marginRight:'10px',fontSize:'18px',color:'#FFFFFE'}}>Edit icon</span>
                <span style={{marginLeft:'10px',fontSize:'18px',color:'#A7A9BE'}}>Trash icon</span>
            </div>
        </div>
    )
}
