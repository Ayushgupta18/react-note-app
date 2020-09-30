import React from 'react'
import './navbar.css'
export default function Navbar(props) {
    const handleLogout =()=>{
        localStorage.removeItem('token')
        props.fillUser(null)
    }
    return (
        <div className="navbar">
            <h1>My Notes</h1>
            <div className="rigth-side">
                <span style={{marginRight:'10px',fontSize:'36px',color:'#FFFFFE'}}>Profile</span>
                <span style={{marginLeft:'10px',fontSize:'32px',color:'#A7A9BE', cursor:'pointer'}} onClick={handleLogout}>Logout</span>
            </div>
        </div>
    )
}
