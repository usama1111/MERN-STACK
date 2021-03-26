import React, { useState , useRef} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Footer.css';
import mainLogo from'./Logo2.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import {Button} from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import {auth} from '../firebase';

import { IconContext } from 'react-icons';
import { Typography } from '@material-ui/core';
import useWebAnimations, { rubberBand } from '@wellyshen/use-web-animations';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const { ref, playState, getAnimation } = useWebAnimations({ ...rubberBand });
  const element = useRef(null);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar2'>
          <div ref={ref} onPlayCapture={()=> getAnimation().play()} >
          <h3>PIKOWAWI</h3> 
          <h5><FacebookIcon/> www.facebook.com </h5> 
         <PhoneIcon/> +43282920 
       
            </div>
    <h5> Copyright 2020-2025</h5>

          <img src= {mainLogo} alt={"logo"} className="logo1" />
          </div>
          <div>
      
      </div>

        
      </IconContext.Provider>
    </>
  );
}

export default Navbar;