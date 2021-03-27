import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
      },
  
    {
    title: 'About',
    path: '/about',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  } ,
  {
    title: 'Add An inventory',
    path: '/inventory',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Show All Inventory',
    path: '/allinventory',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
   
  
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  } 
];