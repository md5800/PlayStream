import React from 'react'
import SideBar from './SideBar'
import Body from './Body';

const MainContainer = () => {
  return (
    <div className='wrapper pt-3'>
       <div className="container-fluid">
        <div className="row justify-content-between">
          <div className="col-md-2">
            <SideBar/>  
          </div>
          <div className="col-md-10" id="videoPanel">
            <Body/> 
          </div>
        </div>
       </div>
    </div>
  )
}

export default MainContainer;