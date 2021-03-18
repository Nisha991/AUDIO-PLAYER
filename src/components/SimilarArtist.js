import React, { Component } from 'react'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import FavoriteIcon from '@material-ui/icons/Favorite';
import InfoIcon from '@material-ui/icons/Info';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
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
import '../Artistpage.css';
import { EditAttributesOutlined, ExpandLess } from '@material-ui/icons';
export default class SimilarArtist extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            artist:[
                {
                  
                  img:img1,
                  name:"Lady Gaga",
                  id:1,
                  singer:"Edle"
                  
              },
              {
              
                img:img2,
                id:2, 
                name:"Taylor Swift",
               singer:"Edle"
            },
            {
               
                img:img3,
                id:3, 
                name:"Rihana",
               singer:"Edle"
            },
            {
                img:img4,
                id: 4, 
                name:"Ed Shereen",
                singer:"Edle"
            },
            {
                img:img5,
                id:5,
                name:"Bruno Mars",
                singer:"Edle"
            },
            {
                img:img6,
                id:6,
                name:"Adam Lavine",
                singer:"Edle"
            }
            ], 
            recent:[
                { 
                    img:img1,
                    id:1,
                    song:"Osmin",
                    no: 1
                    
                },
                {
                
                  img:img2,
                  id:2, 
                  song:"Jasmin",
                 no: 2
              },
              {
                 
                  img:img3,
                  id:3, 
                  song:"Rihana",
                 no: 3
              },
              {
                  img:img4,
                  id: 4, 
                  song:"Edmin",
                  no: 4
              },
              {
                  img:img5,
                  id:5,
                  song:"Redim",
                  no: 5,
              },
              {
                  img:img12,
                  id:6,
                  song:"Redim",
                no: 6,
              },
              
               {
                            
                            img:img6,
                            song:"Nagin",
                            id:7,
                            singer: 7,
                            
                        },
                        {
                        
                          img:img7,
                          id:8, 
                          song:"Snake",
                         no: 8,
                      },
                      {
                         
                          img:img8,
                          id:9, 
                          song:"Cobra",
                         no: 9,
                      },
                      {
                          img:img9,
                          id: 10, 
                          song:"Python",
                          no: 10,
                      },
                      {
                          img:img10,
                          id: 11, 
                          song:"rashford",
                          no: 11,
                      },
                      {
                          img:img11,
                          id:12,
                          song:"Rattle",
                          no: 13,
                      },
                      {
                    
                          img:img12,
                          song:"Osmin",
                          id:13,
                          no: 14
                          
                      },
                      {
                      
                        img:img13,
                        id:14, 
                        song:"Jasmin",
                       no: 15
                    },
                    {
                       
                        img:img14,
                        id:15, 
                        song:"Rihana",
                       no:16
                    },
                    {
                        img:img15,
                        id: 16, 
                        song:"Edmin",
                        no: 17
                    },
                    {
                        img:img16,
                        id:17,
                        song:"Redim",
                        no: 18,
                    },
                    {
                        img:img17,
                        id:18,
                        song:"Redim",
                        no: 19,
                    },

            ],
             isOpen:false,
        }
    }
    

    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }
    render() {
        return (
                 <aside>
                    <div className="aside-header1">
                      <h2>Similar Artists</h2>
                      <span>View All</span>
                    </div>
                    <div className="section1">
                    { this.state.artist.map((art)=>{
                        const {img,name,id,singer}=art;
                        return(
                        <div class="similar-artists">
                           <img src={img}/>
                           <div className="song-details-list">
                           <h5>{name}</h5>
                           <p>{singer}</p>
                           </div>
                           <div class="dropdown-menu">
                              <div className="icon1"><div className="bar"><MoreHorizIcon /></div></div>
                              <ul className="click">
                              <li><a href="#"><PlayArrowIcon className="list" />Play Now</a></li>
                              <li><a href="#"><FavoriteIcon className="list"/>Add to favourites</a></li>
                            <li><a href="#"><InfoIcon className="list"/>Get info</a></li>
                              </ul>
                           </div>
                        </div>
                    )})    
                }
                </div>
                  <div className="aside-header2">
                                    <h2>Recently Played</h2>
                                    <span>View All</span>
                                  </div>
                                  <div className="section2">
                                    {
                                      this.state.recent.map((played) => {
                                          const {img,id,song,no} = played;
                                          return (
                                            <div className="recently-played-albums" key={id}>
                                               <span>{no}</span>
                                               <img src={img} />
                                               <div className="song-details">
                                               <h5>{song}</h5>
                                               <p>Else</p>
                                               </div>
                                               <FavoriteBorderIcon className="Icon" />
                                            </div>
                                          )
                                        })
                                    }
                                    </div>
                                  
                        </aside>
            
        )
    }
}
