import React from 'react'
import './card_navbar.css'
import trashIcon from './trash.svg'
import editIcon from './edit-file.svg'
export default function Card_navbar(props) {

    const handleTrash =()=>{
        const id=props.id
        fetch('http://localhost:8080/api/user/deletenote/'+id, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json','x-access-token':localStorage.getItem('token')},
            })
            .then((res)=>{
                return res.json()
                })
            .then((data)=>{
                console.log(data)
                props.fillUser(data)
                });
    }

    const handleEdit = ()=>{
        props.setPopup(props.title,props.body,props.id)
    }
    return (
        <div className="card-navbar">
            <span style={{fontSize:'32px',color:'#A7A9BE'}}>{props.title}</span>
            <div className="rigth-side">
                <span onClick={handleEdit} style={{marginLeft:'10px',height:'18px',color:'#A7A9BE', cursor:'pointer'}}><img alt="edit icon" src={editIcon} style={{height:'22px',width:'22px',color:'#A7A9BE'}}/></span>
                <span onClick={handleTrash} style={{marginLeft:'10px',height:'18px',color:'#A7A9BE',cursor:'pointer'}}><img alt="trash icon" src={trashIcon} style={{height:'22px',width:'22px',color:'#A7A9BE'}}/></span>
            </div>
        </div>
    )
}
