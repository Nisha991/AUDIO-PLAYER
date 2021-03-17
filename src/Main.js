import React from 'react';
import Banner from './Banner';
import LatestRelease from './LatestRelease';
import './App.css';
import PopularArtist from './PopularArtist';
class Main extends React.Component{

    render(){
       return(
       <div className="main">
       <Banner/>
       <LatestRelease />
       <PopularArtist />
       </div>
       );
    }
}
    export default Main;