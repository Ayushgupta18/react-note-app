import React from 'react';
import './signin.css';
import {Link,useHistory,Redirect} from 'react-router-dom'

export default function Singnin(props) {
    const history=useHistory();
    const [formData,setFormData] = React.useState({username:"", password:""}) 
    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name] :e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        fetch(' http://localhost:8080/api/auth/signin',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username:formData.username, password:formData.password })
        })
        .then((res)=>{
          return res.json();
        })
        .then((data)=>{
          if(data.message){
            alert(data.message)
          }
          else{
            props.fillUser(data);
            localStorage.setItem('token',data.accessToken)
            history.replace('/')
          }
          
        })
    }
    if(!props.user){
      return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input name="username" placeholder="username" onChange={handleChange}></input>
                <input name="password" placeholder="password" onChange={handleChange} type='password'></input>
                <br/>
                <br/>
                <span style={{color:"#F25F4C"}}><Link to="/signup">Register?</Link></span>
                <br/>
                <br/>
                <button type='submit' style={{width:"80%", backgroundColor:"#FF8906", padding:"4px"}}>Login</button>
            </form>
        </div>
    )}
    else{
      return(
        <>
          <Redirect to="/" />
        </>
      )
    }
}
