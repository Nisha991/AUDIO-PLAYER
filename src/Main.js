import React from 'react';
import Banner from './Banner';
import LatestRelease from './LatestRelease';
import './App.css';
class Main extends React.Component{

    render(){
       return(
       <div className="main">
       <Banner/>
       <LatestRelease />
       </div>
       );
    }
}
    export default Main;