import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from "react-icons/fi";
import { Link } from 'react-router-dom';
import { SidebarData } from './sidebardata';
import './navbar.scss';


function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
 
  return (
    <>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>    
          <p>🔚 Github,Social</p>
          <FiIcons.FiSun/>
        </div>
        <nav className={sidebar ? 'nav-menu active ' : 'nav-menu '}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <a href={item.ref} target="_blank">
                    {item.icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      
    </>
  );
          
}

export default Navbar;