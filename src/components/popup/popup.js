import React,{useState} from 'react'
import './popup.css'
export default function Popup(props) {
    const [popupData,setPopupData] = useState({title:props.popupData.title, content:props.popupData.content}) 
    const handleChange = (e) =>{
        setPopupData({
            ...popupData,
            [e.target.name] :e.target.value
        })
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        const id=props.popupData.id;
        if(!id){
            fetch(`${process.env.REACT_APP_URI}/api/user/addnote`, {
                method: 'put',
                headers: {'Content-Type': 'application/json','x-access-token':localStorage.getItem('token')},
                body:JSON.stringify({
                title: popupData.title,
                content: popupData.content
                })
            })
            .then((res)=>{
                return res.json()
                })
            .then((data)=>{
                console.log(data)
                props.closePopup()
                props.fillUser(data)
                }); 
        }
        else{
            fetch(`${process.env.REACT_APP_URI}/api/user/modifynote/${id}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json','x-access-token':localStorage.getItem('token')},
                body:JSON.stringify({
                    // title: popupData.title,
                    content: popupData.content
                })
            })
            .then((res)=>{
                return res.json()
                })
            .then((data)=>{
                console.log(data)
                props.closePopup()
                props.fillUser(data)
                }); 
        }
        
    }
    return (
        <div className="popup">
            <form onSubmit={handleSubmit}>
                <input name="title" placeholder="Enter Note Title" onChange={handleChange} style={{maxWidth:"97%",minWidth:"97%"}} value={popupData.title}></input>
                <br/>
                <br/>
                <textarea name="content" onChange={handleChange} style={{maxWidth:"100%",minWidth:"100%",maxHeight:"220px",minHeight:"220px"}} placeholder="Write notes" value={popupData.content}></textarea>
                <div className="footer">
                    <button type="submit">Save</button>
                    <button onClick={props.closePopup}>Cancel</button>
                </div>
            </form>
        </div>
    )
}
