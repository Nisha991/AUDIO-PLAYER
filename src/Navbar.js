import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import NotificationsIcon from '@material-ui/icons/Notifications';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import img1 from './images/logo3.png';
const Navbar=(props)=>{
        return(
            <div style={styles.pageHeader}>
                    <div>
                     <a href="#"><img src={img1} style={styles.logo} /></a>
                    </div>
                    <div>
                     <a href="#" style={styles.fav}>Favourites</a>

                     </div>
                   <div style={styles.search}>
                     <div style={styles.searchIcon}><SearchIcon /></div>
                     <input type="text" placeholder = "Search" style={styles.searchInput}></input>
                     <submit style={styles.voiceButton}><MicIcon /></submit>
                   </div>
                   <div style={styles.bellIcon}>
                     <a href="#">
                     <div> <NotificationsIcon style={styles.bell}/></div>
                     <FiberManualRecordIcon style={styles.redDot} />
                     </a>
                  </div>
                  <div style={styles.imageDiv}>
                     <a href="#" style={styles.accountHolderImage}>
                     <img style={styles.imgs} src="https://www.promarinetrade.com/cache/promarine/public/shop_product_picture/_1200x800x0/4625_N.jpg"></img>
                     </a>
                  </div>
            </div>
    
        );
    
}
export default Navbar;

//PASSING STYLES AS OBJECTS
const styles = {
    pageHeader :{
     width:'100%',
     height:'20vp',
     marginTop:0,
     display: 'flex',
     justifyContent: 'space-around',
     position: 'fixed',
     Zindex:'99',
     backgroundColor:'#00011b'
 },
 logo :{
     marginTop:5,
     marginLeft:0,
     height:100,
     width:100,
     padding:0 
 },
 fav : {
     color:'white',
     fontSize:20,
     letterSpacing:'0.1rem',
     textDecoration:'none',
     display:'inline-block',
     marginTop:40,
     marginLeft:'1%'
 },
 search :{
     display:'flex',
     borderRadius:20,
     backgroundColor:'#203354' ,
     marginLeft:'30%',
     marginTop:35,
     width:350,
     height:40
     
 },
 searchIcon :{
     display:'inline-block',
     color:'white',
     marginTop:12,
     marginLeft:10,
     marginRight:16
 },
 searchInput :{
 
     textAlign:'center',
     height:'100%',
     border:'0 solid transparent',
     color:'white',
     fontSize:17,
     padding:'8 8 8 8',
     outline:'none',
     backgroundColor:'transparent',
     width:'75%'
 },
 voiceButton:{
     
     outline: 'none',
     color:'white',
     marginLeft:18,
     marginRight:5,
     marginTop:12,
     border:'0 solid transparent'
     
 },
  i:{
     
     fontSize:17,
     
 }  ,
 bellIcon :{
    
     marginLeft:'1%',
     marginTop:42
 },
 
 bell:{
     fontSize:30,
     color:'white',
     position:'relative'
 
 },
 redDot:{
    position:'absolute',
   marginLeft:16,
   marginTop:-30,
   color:'red',
   fontSize:'0.6rem'
 },
 accountHolderImage:{
     marginLeft:'1%',
     marginTop:35,
     display:'inline-block'
 },
 imgs :{
     borderRadius: 50,
     backgroundSize:'contain',
     height:50,
     width:50
 },
 }
   