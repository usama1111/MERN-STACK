import React, { useState , useRef} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import mainLogo from'./Logo2.png';
import {Button} from '@material-ui/core';

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
        <div className='navbar'>
            
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div ref={ref} onPlayCapture={()=> getAnimation().play()} >
          <h1 className ="name">Pikowawi</h1>
    </div>
          <img src= {mainLogo} alt={"logo"} className="logo" />
          
          <Button variant="contained" color="primary" href="#contained-buttons" onClick={() => auth.signOut()}>
  SignOut
</Button>
          <div>
      </div>
      </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;