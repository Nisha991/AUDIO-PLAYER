import React from 'react';
import img1 from './images/lat1.jpg'; 
import img2 from './images/lat2.jpg';
import img3 from './images/lat3.jpg';  
import img4 from './images/lat4.jpg'; 
import img5 from './images/lat5.jpg';  
import img12 from './images/lat6.jpg'; 
import img6 from './images/hin5.jpg';  
import img7 from './images/hin1.jpg'; 
import img8 from './images/hin2.jpg';
import img9 from './images/hin3.jpg';  
import img10 from './images/hin4.jpg'; 
import img11 from './images/hin6.jpg'; 


class LatestEnglish extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
            English:[
                {
                  
                  img:img1,
                  name:"Osmin",
                  id:1,
                  date: 2017
                  
              },
              {
              
                img:img2,
                id:2, 
                name:"Jasmin",
               date: 2015
            },
            {
               
                img:img3,
                id:3, 
                name:"Rihana",
               date: 2016
            },
            {
                img:img4,
                id: 4, 
                name:"Edmin",
                date: 2019
            },
            {
                img:img5,
                id:5,
                name:"Redim",
                date: 2012,
            },
            {
                img:img12,
                id:5,
                name:"Redim",
                date: 2012,
            },
            ], 
    
                
                    Hindi:[
                        {
                          
                          img:img6,
                          name:"Nagin",
                          id:1,
                          date: 2020,
                          
                      },
                      {
                      
                        img:img7,
                        id:2, 
                        name:"Snake",
                       date: 2018,
                    },
                    {
                       
                        img:img8,
                        id:3, 
                        name:"Cobra",
                       date: 2019,
                    },
                    {
                        img:img9,
                        id: 4, 
                        name:"Python",
                        date: 2020,
                    },
                    {
                        img:img10,
                        id: 5, 
                        name:"rashford",
                        date: 2020,
                    },
                    {
                        img:img11,
                        id:6,
                        name:"Rattle",
                        date: 2018,
                    },
                     ], 
                   
                }
            }
           
        
    render(){
       return(
      
       <section className="latest-songs">
                  <h2>Latest English</h2>
                  <div className="latest">
                        {
                            this.state.English.map((eng)=>{
                                const {img, id, name, date} = eng;
                                return( 
                                    <div className="english-hindi" key={id}>
                                        <img src={img} />
                                        <h4>{name}</h4>
                                        <p>{date}</p>
                                    </div>
                                )
                         })
                    }
                    </div>
                       <h2>Latest Hindi</h2>
                       <div className="latest">
                       {
                           this.state.Hindi.map((hindi) => {
                            const {img, id, name, date} = hindi;
                            return(
                                    <div className="english-hindi" key={id}>
                                        <img src={img} />
                                        <h4>{name}</h4>
                                        <p>{date}</p>
                                    </div>
                            )
                        }) 
                    }
                    </div>
       
                </section>
      
        );
    }
}
    export default LatestEnglish;
