import React from 'react';
import Banner from './Banner';
import LatestRelease from './LatestRelease';
import './App.css';
import PopularArtist from './PopularArtist';
import Themes from './Themes';
import LatestEnglish from './LatestEnglish';
class Main extends React.Component{

    render(){
       return(
       <div className="main">
       <Banner/>
       <LatestRelease />
       <PopularArtist />
       <Themes/>
       <LatestEnglish />
       </div>
       );
    }
}
    export default Main;