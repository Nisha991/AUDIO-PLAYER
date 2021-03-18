import React, { Component } from 'react'
import img1 from '../images/1.jpg'; 
import img2 from '../images/img2.jpg';
import img3 from '../images/3.jpg';  
import img4 from '../images/4.jpg'; 
import img5 from '../images/lat5.jpg';  
import img6 from '../images/hin5.jpg';  
import img7 from '../images/hin1.jpg'; 
import img8 from '../images/2.jpg';
import img9 from '../images/hin3.jpg';  
import img10 from '../images/lat1.jpg'; 
import img11 from '../images/hin6.jpg'; 
import img12 from '../images/lat1.jpg'; 
import img13 from '../images/lat2.jpg';
import img14 from '../images/lat3.jpg';  
import img15 from '../images/lat4.jpg'; 
import img16 from '../images/lat5.jpg';  
import img17 from '../images/lat6.jpg'; 
import img18 from '../images/hin5.jpg';  
import img19 from '../images/hin1.jpg'; 
import img20 from '../images/hin2.jpg';
import img21 from '../images/hin3.jpg';  
import img22 from '../images/hin4.jpg'; 
import img23 from '../images/hin6.jpg'; 
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
export default class Aside extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            aside:[
                {
                  
                  img:img1,
                  id:1,
                  song:"Osmin",
                  singer: 2017
                  
              },
              {
              
                img:img2,
                id:2, 
                song:"Jasmin",
               singer: 2015
            },
            {
               
                img:img3,
                id:3, 
                song:"Rihana",
               singer: 2016
            },
            {
                img:img4,
                id: 4, 
                song:"Edmin",
                singer: 2019
            },
            {
                img:img5,
                id:5,
                song:"Redim",
                singer: 2012,
            },
            {
                img:img12,
                id:6,
                song:"Redim",
                singer: 2012,
            },
            
             {
                          
                          img:img6,
                          song:"Nagin",
                          id:7,
                          singer: 2020,
                          
                      },
                      {
                      
                        img:img7,
                        id:8, 
                        song:"Snake",
                       singer: 2018,
                    },
                    {
                       
                        img:img8,
                        id:9, 
                        song:"Cobra",
                       singer: 2019,
                    },
                    {
                        img:img9,
                        id: 10, 
                        song:"Python",
                        singer: 2020,
                    },
                    {
                        img:img10,
                        id: 11, 
                        song:"rashford",
                        singer: 2020,
                    },
                    {
                        img:img11,
                        id:12,
                        song:"Rattle",
                        singer: 2018,
                    },
                    {
                  
                        img:img12,
                        song:"Osmin",
                        id:13,
                        singer: 2017
                        
                    },
                    {
                    
                      img:img13,
                      id:14, 
                      song:"Jasmin",
                     singer: 2015
                  },
                  {
                     
                      img:img14,
                      id:15, 
                      song:"Rihana",
                     singer: 2016
                  },
                  {
                      img:img15,
                      id: 16, 
                      song:"Edmin",
                      singer: 2019
                  },
                  {
                      img:img16,
                      id:17,
                      song:"Redim",
                      singer: 2012,
                  },
                  {
                      img:img17,
                      id:18,
                      song:"Redim",
                      singer: 2012,
                  },
                  
                   {
                                
                                img:img18,
                                song:"Nagin",
                                id:19,
                                singer: 2020,
                                
                            },
                            {
                            
                              img:img19,
                              id:20, 
                              song:"Snake",
                             singer: 2018,
                          },
                          {
                             
                              img:img20,
                              id:21, 
                              song:"Cobra",
                             singer: 2019,
                          },
                          {
                              img:img21,
                              id: 22, 
                              song:"Python",
                              singer: 2020,
                          },
                          {
                              img:img22,
                              id: 23, 
                              song:"rashford",
                              singer: 2020,
                          },
                          {
                              img:img23,
                              id:24,
                              song:"Rattle",
                              singer: 2018,
                          },
                     ], 
                   check:false,
                }
            }
            handleToggle =()=>{
                this.setState({
                    check: !this.state.check
                })
            }
    render() {
        return (
            <aside className="mainAside">
                    <div className="aside-header">
                      <h2> My Playlist</h2>
                      <span>Queue</span>
                      <div className="aside-dropdown">
                      
                      <div className="aside-icon" onClick={this.handleToggle}><ArrowDropDownIcon /></div>
                      <ul className={this.state.check ? "aside-dropdown-list" :"hide-drop-down"}>
                        <li><a href="#">Play Now</a></li>
                        <li><a href="#">Add to favourites</a></li>
                      </ul>
                      </div>
                    </div>
                    <div className="scroll-bar">
                        {this.state.aside.map((detail)=>{
                        const{img, id, song, singer} = detail;
                        return(
                            <div className="my-playlist-albums">
                            <span>{id}</span>
                            <img src={img} />
                            <div className="song-details">
                            <h5>{song}</h5>
                            <p>{singer}</p>
                            </div>
                            <FavoriteBorderIcon className="FavIcon" />
                         </div>
                        )}
                        )
                        }
                   
            </div>
         </aside>
        )
    }
}
