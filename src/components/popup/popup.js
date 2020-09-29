import React,{useState} from 'react'
import './popup.css'
export default function Popup(props) {
    const [popupData,setPopupData] = useState({title:props.popupData.title, notes:props.popupData.notes}) 
    const handleChange = (e) =>{
        setPopupData({
            ...popupData,
            [e.target.name] :e.target.value
        })
        console.log(popupData)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("submission")
    }
    return (
        <div className="popup">
            <div className="popup-inner">
                <form onSubmit={handleSubmit}>
                    <input name="title" placeholder="Enter Note Title" onChange={handleChange} style={{maxWidth:"97%",minWidth:"97%"}} value={popupData.title}></input>
                    <br/>
                    <br/>
                    <textarea name="notes" onChange={handleChange} style={{maxWidth:"100%",minWidth:"100%",maxHeight:"220px",minHeight:"220px"}} placeholder="Write notes" value={popupData.notes}></textarea>
                    <div className="footer">
                        <button type="submit">Save</button>
                        <button onClick={props.closePopup}>Cancel</button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}
