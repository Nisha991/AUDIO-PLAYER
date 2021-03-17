import React from 'react';
import img1 from '../images/logos.png'; 
import img2 from '../images/img1.jpg';
import img3 from '../images/img2.jpg';  
import img4 from '../images/15.jpg'; 
import img5 from '../images/13.jpg';  
import img6 from '../images/12.jpg'; 
import img7 from '../images/img6.jpeg'; 
import img8 from '../images/type1.jpg';
import img9 from '../images/type2.jpg';  
import img10 from '../images/type3.jpg'; 

export default function Themes() {
    return (
        
        <section className="genre">
                    
                    <div className="stations">
                    <div className="station-logo">
                    <img src={img1}/>
                    </div> 
                    <div className="music-styles">
                        <img src={img2}  />
                        <div className="centered "><b>LOVE</b></div>
                    </div>
                    <div className="music-styles">
                        <img src={img3} />
                        <div className="centered "><b>RETRO</b></div>
                    </div>
                    <div className="music-styles">
                        <img src={img4} />
                        <div className="centered "><b>ROCK</b></div>
                    </div>
                    <div className="music-styles">
                        <img src= {img5}/>
                        <div className="centered "><b>WORKOUT</b></div>
                    </div>
                    <div className="music-styles">
                        <img src={img6} />

                        <div className="centered "><b>POP</b></div>
                    </div>
                    <div className="music-styles">
                        <img src={img7}/>
                        <div className="centered "><b>CHILL</b></div>
                </div>
                </div>
            <div className="music-type">
            <div className="zoom-in">
            <img src={img8}/>
            <div className="centered" style={{fontSize:"1.5rem",fontWeight: 700}}>Party</div> 
            </div>
            <div className="zoom-in">
            <img src={img10}/>
            <div className="centered" style={{fontSize:"1.5rem",fontWeight: 700}}>Road Trip</div>
            </div>
            <div className="zoom-in">
            <img src={img9}/>
            <div className="centered" style={{fontSize:"1.5rem",fontWeight: 700}}>Electric</div>
            </div>
            </div>
        </section>
                
    )
}
