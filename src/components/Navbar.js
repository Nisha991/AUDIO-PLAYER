import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import NotificationsIcon from '@material-ui/icons/Notifications';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import {Link} from 'react-router-dom';
import img1 from '../images/logo3.png';
import '../App.css';
const Navbar=(props)=>{
        return(
                 <header className="page-header">
                     <div className="logo11">
                    <Link to="/"><img src={img1} className="logo" /></Link>
                     </div>
                     <div>
                    <a href="#" className="favourites">Favourites</a>
                     </div>
                   <div className="search">
                     <div className="search-icon">
                     <SearchIcon  />
                     </div>
                     <input type="text" placeholder="Search" />
                      <submit className="voice-button"><MicIcon /></submit>
                    </div>
                   <div className="bell-icon">
                    <a href="#">
                    <NotificationsIcon className="bell" />
                    <FiberManualRecordIcon className="red-dot" />
                    </a>
                    </div>
                    <div className="image-div">
                    <a href="#" className="account-holder-image">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOoAAADXCAMAAAAjrj0PAAAAZlBMVEX///8AAADx8fFNTU17e3ucnJykpKT8/PyVlZW6urqwsLDo6Oj29vZERET5+fkEBATd3d1oaGguLi7Q0NCNjY1xcXFUVFTBwcHW1tYSEhKFhYU/Pz9bW1sgICDs7Ow4ODgZGRkkJCR/ymy4AAACyklEQVR4nO3cbU/iUBCG4TkKHBDkHUUUXf//n9yCb9CZtiQEd3l6Xx/dTMKdru3ZSRczAAAAAAAAAAAAAAAAAAAAAAAA4Bfk6GfRD5vGmmf+uVG/WzI45WOXp+4u/0nPdpOc0Qlj5Zn7i3/Q8wWpLyeMlWduL/5BzxekpkHzmErqdtz42yqSOkn9xjGR1MKwaUwn9aFpTCc1NT0nhVLTuH5MKXVVP6aUmqa150Op1HntmFRq6taNaaWm15oxsdRZzZhYanqsHtNKnRR3psqbsFZqYVM5JpdafWfSS32rGtNLrVxICKamm3hMMbUTjymmpkX4xJFMfQ7HJFPjnZpmanhnEk2NMjRTJ8WdydFMTWnrxyRSO/fFdSxZujGJ1M0iuK7T8phEasdWPtVt+0VSX4PLWl5IiKTaXdBaOh2qpNrcp86Oj8IiqdmGrnSS1kdjIqmFjr+sxwsJmdQ89qnH236ZVLNB0Hp47BdKtRefenhnUkqdBpf14NivlGobfxROP2NSqfbkL2v/+6+wUmq2tU/9eclHKbUw86nfRWKp0b/av17yEUuNjv2Tz5d81FKjY//m484klxrdmT4WEnKptvIP16f9H+iluqRCL/q5QGq0kNi92y+Yag8+dfeSj2KqX0jsd2qKqdb1qX8kU7PlrW9dKqYWHn1qclMaqdFC4lY0NQeXVTTVeu1Jtff2pK5TsGiSTM3hTk0y1Sza9oumhtt+0VRzT1Ld1Gn9b6tQarZla65quO1XTY2O/ZqpOVpIaKbWv6Mnlhru1ERT7bk9qYvKh6taao5e8tFMtXDbr5padezXS81Vdya91HjbL5madwuJdqQW8jx64kimFsf+1qRGL/mopkZ3JtHU6Nh/Danuv180fCXP3rtLvYIv98ujbu9YzfdefM3YsDzUu4avbAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4P/yFzYcHTkWGEzzAAAAAElFTkSuQmCC" />
                    </a></div>
                    </header>
                    
    
        );
    
}
export default Navbar;