import React, { Component } from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddIcon from '@material-ui/icons/Add';
import img1 from '../images/1.jpg'; 
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';  
import img4 from '../images/4.jpg'; 
import img5 from '../images/5.jpg';  
import img6 from '../images/lat6.jpg'; 
export default class ArtistPlaylist extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            Playlist:[
                {
                  
                  img:img1,
                  name:"Osmin",
                  id:1,
                  song:"Pink",
                  no:1,
              },
              {
              
                img:img2,
                id:2, 
                name:"Jasmin",
               song: "Blue",
               no:2,
            },
            {
               no:3,
                img:img3,
                id:3, 
                name:"Rihana",
               song: "Green",
            },
            {
                img:img4,
                id: 4, 
                name:"Edmin",
                song: "Yellow",
                no:4,
            },
            {
                img:img5,
                id:5,
                name:"Redim",
                song: "Purple",
                no:5,

            },
            {
                img:img6,
                id:5,
                name:"Redim",
                song: "Gray",
                no:6,
            },
            ], 
        }
    }
    render() {
        return (
            <section>
           
               {this.state.Playlist.map((play)=>{
               const {img, name, id,song,no} = play;
               return(
                <div className="musician-album-list">
                <span>{no}</span>
                <img src={img} />
                <div className="song-details">
                <h5>{name}</h5>
                <p>{song}</p>
                </div>
                <FavoriteBorderIcon className="heart" />
                <AddIcon className="plus" />
                </div>
              
               )})}
                </section>
        )
    }
 }
