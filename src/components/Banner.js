import React from 'react';
import img123 from '../images/123.jpg'; 
import img11 from '../images/11.jpg';
import img121 from '../images/121.jpg';  
import '../App.css';


class Banner extends React.Component{
    constructor(){
        super();
         this.state={
         images:[
          {
            
            img:img11,
            id:1
            
        },
        {
        
          img: img123,
          id:2
      },
      {
         
          img:img121,
          id:3
      }
      ], 
     }
    }
  
    render() {

       return(
        <section className="banner">
        <div  className="slider">
          {
            this.state.images.map((image) => {
              const {img, id} = image;
              return(
                <img src={img} key={id} className="slider"></img>
              )
            })
          }
           {/* <img src={img123} className="slider" ></img>
           <img src={img11} className="slider"></img>
           <img src={img121} claassName="slider"></img> */}
          
         </div>
        </section>
       );
    }
}


    export default Banner;