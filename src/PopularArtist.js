import React, { Component } from 'react'
import img1 from './images/art1.jpg'; 
import img2 from './images/art2.jpg';
import img3 from './images/art3.jpg';  
import img4 from './images/art4.jpg'; 
import img5 from './images/art5.jpg';  
import img6 from './images/art6.jpg'; 

export default class PopularArtist extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            artist:[
                {
                  
                  img:img1,
                  name:"Lady Gaga",
                  id:1
                  
                  
              },
              {
              
                img:img2,
                id:2, 
                name:"Taylor Swift"
               
            },
            {
               
                img:img3,
                id:3, 
                name:"Rihana"
               
            },
            {
                img:img4,
                id: 4, 
                name:"Ed Shereen"
                
            },
            {
                img:img5,
                id:5,
                name:"Bruno Mars"
            },
            {
                img:img6,
                id:6,
                name:"Adam Lavine" 
            }
            ], 
           
        }
    }
    render() {
        return (
            <div>
                <section id="popular-artist">
                        <h2 className="font-color">Popular Artists</h2>
                        <div className="artist-images" >
                       {
                        this.state.artist.map((arts)=>{
                            const {img, name, id} = arts;
                                return(
                                    <div className="artists" key={id}>
                                    <a href="single-screen.html"><img src={img} /></a> 
                                    <h4>{name}</h4>
                                    </div>
                                    
                                );
                        })  
                       }    
                       </div>                 
                     </section>  
            </div>
        )
    }
}
