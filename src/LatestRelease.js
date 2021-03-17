import React, { Component } from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';
import FavoriteIcon from '@material-ui/icons/Favorite';
import InfoIcon from '@material-ui/icons/Info';
import img1 from './images/1.jpg'; 
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';  
import img4 from './images/4.jpg'; 
import './App.css';

export default class LatestRelease extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            images:[
                {
                  
                  img:img1,
                  id:1, 
                  name:"lalal",
                  date:"2018"
                  
                  
              },
              {
              
                img:img2,
                id:2, 
                name:"lalal",
                date:"2018"
            },
            {
               
                img:img3,
                id:3, 
                name:"lalal",
                date:"2020"
            },
            {
                img:img4,
                id: 4, 
                name:"lalal",
                date:"2019"
            }
            ], 
            isOpen: false,
        }
    }

    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
        <section className="latest-release">
        <h2 className= "font-color">Latest Releases</h2>
        <div className="latest-release-album" >
       {
           this.state.images.map((image) => {
               let {img, id, name,date} = image;
               return(  
                <div className="content" key={id}>
                <a href="#"><img src={img}/></a>
                <div className="info font-color">
                <h4>
                    <span>{name}</span><br></br>
                    <span>{date}</span>
                </h4>
                </div>
                <div className="drop-down-menu">
                <div className="bar" onClick={this.handleToggle}><MoreHorizIcon /></div>
                <ul className={this.state.isOpen ? "drop-down-menu-list" : "hide-drop-down"}>
                <li><a href="#"><PlayArrowIcon className="list" />Play Now</a></li>
                <li><a href="#"><AddIcon className="list"/>Add to queue</a></li>
                <li><a href="#"><FavoriteIcon className="list"/>Add to favourites</a></li>
                <li><a href="#"><InfoIcon className="list"/>Get info</a></li>
                </ul>
                </div>
                </div>
               )
           })
       }
         </div> 


      
        </section>
        )
    }
}
