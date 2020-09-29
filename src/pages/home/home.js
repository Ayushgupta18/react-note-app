import React,{useState} from 'react';
import './home.css';
import Card from '../../components/card/card.js';
import Navbar from '../../components/main_navbar/navbar'
import Popup from '../../components/popup/popup'

export default function Home() {
    const [showPopup,setShowPopup] = useState(false);
    const [initialPopupData,setInitialPopupData] = useState({title:"",notes:""});

    const getPopupData = (title,notes)=>{
        setInitialPopupData({
            title:title,
            notes:notes
        })
    }

    const tooglePopup = ()=>{
        setShowPopup(!showPopup);
        setInitialPopupData({
            title:"",notes:""
        })
    }

    return (
        <>
            {showPopup?<Popup popupData={initialPopupData} closePopup={tooglePopup}/>:null}
            <div className="home-container">
                <Navbar/>
                <div className="container">
                    <div className="card-header">
                        <h3>Total notes</h3>
                        <button onClick={tooglePopup}>Create note</button>
                    </div>
                    
                    <div className="card-container">
                        <Card openPopup={tooglePopup} setPopup={getPopupData}/>
                        <Card openPopup={tooglePopup} setPopup={getPopupData}/>
                        <Card openPopup={tooglePopup} setPopup={getPopupData}/>
                        <Card openPopup={tooglePopup} setPopup={getPopupData}/>
                        <Card openPopup={tooglePopup} setPopup={getPopupData}/>
                        <Card openPopup={tooglePopup} setPopup={getPopupData}/>
                        <Card openPopup={tooglePopup} setPopup={getPopupData}/>
                        <Card openPopup={tooglePopup} setPopup={getPopupData}/>
                    </div>
                </div>
                
            </div>
            
        </>
    )
}
