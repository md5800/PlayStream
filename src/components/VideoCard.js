import React from 'react';
import { Link } from 'react-router-dom';
import VideoThumb from "../images/videothumb.webp";
import ThumbIcon from "../images/thumbicon.jpg"

const VideoCard = () => {
  return (
    <div className="col-md-4 videoBox">
      <div className='videocard'>
         <div className="thumbimg">
            <Link to="/">
              <img src={VideoThumb} alt="thumbnail" />
            </Link>
         </div>
         <h3 className='d-flex justify-between align-middle pt-3'>
           <div className="thumbicon">
             <img src={ThumbIcon} alt="" />
           </div>
           <div className='text'>🔴 Complete Responsive Animated Website using React JS in Hindi in 2020
            <span> Thapa Technical <i className="fa-solid fa-circle-check"></i> <br/>569K views <span className='dot-divider'></span> 4 years ago</span>
           </div>
           <div className="menu">
            <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path></svg></Link>
           </div>
         </h3>
         
      </div>
    </div>
  )
}

export default VideoCard