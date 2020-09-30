import React,{useState} from 'react';
import './home.css';
import Card from '../../components/card/card.js';
import Navbar from '../../components/main_navbar/navbar'
import Popup from '../../components/popup/popup'
import {Redirect} from 'react-router-dom'

export default function Home(props) {
    const [showPopup,setShowPopup] = useState(false);
    const [initialPopupData,setInitialPopupData] = useState({title:"",content:"",id:null});

    const getPopupData = (title,content,id)=>{
        setShowPopup(!showPopup);
        setInitialPopupData({
            title:title,
            content:content,
            id:id
        })
    }
    
    const tooglePopup = ()=>{
        setShowPopup(!showPopup);
        setInitialPopupData({
            title:"",content:"",id:null
        })
    }
    
    if(props.user!=null){
        return (
            <>
                {showPopup?<Popup popupData={initialPopupData} closePopup={tooglePopup}  fillUser={props.fillUser}/>:null }
                <div className="home-container">
                    <Navbar fillUser={props.fillUser}/>
                    <div className="container">
                        <div className="card-header">
                            <h3>Total Notes {props.user.notes.length}</h3>
                            <button onClick={tooglePopup}>Create note</button>
                        </div>
                        <div className="card-container">
                            {props.user.notes.map((note,index)=>
                                <Card key={index} setPopup={getPopupData} title={note.title} content={note.content} id={note._id}  fillUser={props.fillUser}/>
                            )}
                            
                        </div>
                    </div>
                    
                </div>
                
            </>
        )
    }
    else{
        return(
            <>
                <Redirect to="/signin" />
            </>
        )
    }
    
}
