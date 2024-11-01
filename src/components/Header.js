import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../images/logo.png"
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () =>{
    dispatch(toggleMenu());
    var videoPanel = document.getElementById("videoPanel");
    videoPanel.classList.toggle("col-md-12");

    var videoBoxList = document.getElementsByClassName("videoBox");
    for (let i = 0; i < videoBoxList.length; i++) {
        videoBoxList[i].classList.toggle("col-md-4")
        videoBoxList[i].classList.toggle("col-md-3")
        }
    // videoBoxList.classList.toggle("col-md-3");
  };

  return (
    <div className='hdsec py-2 px-4'>
        <div className="container-fuild">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-3">
                    <div className='d-flex justify-content-start align-items-center'>
                        <div className='toggle-menu mr-3 cursor-pointer' onClick={toggleMenuHandler}><i className="fa-solid fa-bars"></i></div>
                        <div className='logo'>
                            <Link to="/" className='d-flex justify-content-start align-items-center no-underline'>
                                <img src={Logo} alt="Logo" className='h-10 mr-1'/> 
                                <h4 className='text-black fw-bold'>VideoTube</h4>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 text-center">
                <form className="d-flex searchbox">
                    <input className="form-control rounded-l-full" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn bg-gray-300 rounded-r-full" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
                </div>
                <div className="col-md-3 text-end">
                    <div className="user"><i className="fa-solid fa-user"></i></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header