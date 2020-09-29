import React from 'react';
import './signin.css';

export default function Singnin() {
    const [formData,setFormData] = React.useState({username:"", password:""}) 
    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name] :e.target.value
        })
        console.log(formData)
    }
    return (
        <div>
            <form className="form">
                <h1>Login</h1>
                <input name="username" placeholder="username" onChange={handleChange}></input>
                <input name="password" placeholder="password" onChange={handleChange}></input>
                <br/>
                <br/>
                <span style={{color:"#F25F4C"}}>Register?</span>
                <br/>
                <br/>
                <button style={{width:"80%", backgroundColor:"#FF8906", padding:"4px"}}>Login</button>
            </form>
        </div>
    )
}
