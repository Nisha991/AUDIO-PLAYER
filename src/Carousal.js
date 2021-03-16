import React from 'react';
import img123 from './images/123.jpg'; 
import img11 from './images/11.jpg';
import img121 from './images/121.jpg';  


class Carousal extends React.Component{
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
        <section style={styles.section}>
        <div  style={styles.sliderDiv}>
          {
            this.state.images.map((image) => {
              const {img, id} = image;
              return(
                <img src={img} key={id} style={styles.slider}></img>
              )
            })
          }
           {/* <img src={img123} style={styles.slider} ></img>
           <img src={img11} style={styles.slider}></img>
           <img src={img121} style={styles.slider}></img> */}
          
         </div>
        </section>
       );
    }
}


    export default Carousal;
  
    const styles={
      slider:{
      height:300,
      width:300,
      transition:'0.75s',
      marginLeft: 10,
      },
      sliderDiv:{
        height:"auto",
        width:'100%',
        marginTop:150,
        
      },
      section:{
        width:'100%',
        height:'auto',
        marginLeft:0,
        overflow:"hidden",
      }
     
    }