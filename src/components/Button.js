import React from 'react';
import { Link } from 'react-router-dom';

const ButtonNameList = ["All", "Music", "Live", "News", "Javascript", "AI", "Information Technology", "React", "BootStrap", "Podcast", "Mutual Fund", "Stocks", "Web Series"]

const Button = () =>{
 return(
    <div className='buttonlist'>
        <ul>
            {
                ButtonNameList.map((name, index) => 
                    <li key={index}><Link to="/">{name}</Link></li>
                )
            }
        </ul>
    </div>
 )
}

export default Button;