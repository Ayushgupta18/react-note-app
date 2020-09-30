import React from 'react'
import './signup.css';
import {Link} from 'react-router-dom'

export default function Signup() {
    const [formData,setFormData] = React.useState({username:"", password:""}) 
    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name] :e.target.value
        })
        console.log(formData)
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        fetch('http://localhost:8080/api/auth/signup', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({
          username: formData.username,
          password:formData.password
        })
      })
        .then((res)=>{
          return res.text();
        })
        .then((data)=>{
            alert(data)
        //   if(data=="registered")
        //     this.props.history.push("/sign/in")
        //   else
        //     alert("unable to registered")
        });
    }
    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h1>Signup</h1>
                <input name="username" placeholder="username" onChange={handleChange}></input>
                <input name="password" placeholder="password" onChange={handleChange} type='password'></input>
                <br/>
                <br/>
                <span style={{color:"#F25F4C"}}><Link to="/signin">Already a member?</Link></span>
                <br/>
                <br/>
                <button style={{width:"80%", backgroundColor:"#FF8906", padding:"4px"}}>Sign up</button>
            </form>
        </div>
    )
}
