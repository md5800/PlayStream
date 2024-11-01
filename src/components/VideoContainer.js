import React from 'react'
import VideoCard from './VideoCard'

const VideoContainer = () => {
  return (
    <div className='videocontainer py-4'>
       <div className="row">
         <VideoCard/>
         <VideoCard/>
         <VideoCard/>

         <VideoCard/>
         <VideoCard/>
         <VideoCard/>

         <VideoCard/>
         <VideoCard/>
       </div>
    </div>
  )
}

export default VideoContainer