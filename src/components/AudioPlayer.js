import React from 'react'
import BlockIcon from '@material-ui/icons/Block';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import RedoIcon from '@material-ui/icons/Redo';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatIcon from '@material-ui/icons/Repeat';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import QueuePlayNextIcon from '@material-ui/icons/QueuePlayNext';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import img1 from '../images/cover1.jpg'; 
export default function AudioPlayer() {
    return (
        <div>
            <footer>
              <div className="audio-player">
                <div className="album-details">
                  <div style={{display: "inline-block"}}>
                     <img src={img1} />
                  </div>
                 <div style={{display:"inline-block",margin:'7px 0px 0px 10px'}}>
                     <h5>Imagine a John Leonon</h5>
                     <p>John Lenon</p>
                  </div>
               <div className="heart-ban-icon">
                     <FavoriteBorderIcon />
                     <BlockIcon />
                  </div>
               </div>
       
               <div class="audio-controls" >
                       <div class="media-control-icons">
                       < RedoIcon style={{fontSize:"1rem",marginRight:"20px" }}/>
                       <SkipPreviousIcon style={{fontSize:"1rem",marginRight:"20px" }}/>
                       < PauseCircleFilledIcon style={{fontSize:"1rem",marginRight:"20px" }}/>
                       <SkipNextIcon style={{fontSize:"1rem",marginRight:"20px" }}/>
                       <RepeatIcon  style={{fontSize:"1rem",marginRight:"20px" }}/>
                   </div>
                   <div class="time">
                      2.74

                   </div >
                   <div class="progress-bar">
                        <div className="progress"></div>
                        <div className="progress-thumb"><FiberManualRecordIcon /></div>
                   </div>
                   <div className="time">
                      5.23
                   </div >
               </div>
              <div className="volume">
                <QueuePlayNextIcon/>
                <EqualizerIcon />
                <VolumeUpIcon />
                <div className="volume-bar">
                   <div className="volume-control"></div>
                   <div className="volume-thumb"><FiberManualRecordIcon /></div>
                </div>
                <AspectRatioIcon />
                </div>
                
              </div>
            </footer>
        </div>
    )
}
