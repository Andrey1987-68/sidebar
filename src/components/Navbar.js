import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom'
import {SidebarData} from './SidebarData'
import './Navbar.css'
import logo from '../img/git.svg'
import MainWindow from './mainWindow'
export function Navbar() {
    const [sidebar,setSidebar]=useState(false)
    const [changeWindow,setchangeWindow]=useState(false)

    const showWindow=()=>{setchangeWindow(!changeWindow); console.log(changeWindow)}
    const showSidebar=()=>setSidebar(!sidebar)
    return (
        <>
          <div className="navbar">
            <div className='menu1'>
                {/* <span>OT</span> */}
            </div>  
            <div className='menu2'>
                <img src={logo}></img>
            </div>  
            <div className='menu3'>
                <nav>
                    <ul className='menu3-ul'>
                          <li className='nav-text'>
                           <Link to='#'>
                               <span className="linspan" onClick={showWindow}>Дисп</span>
                            </Link>
                          </li>
                    {SidebarData.map((item,index)=>{
                      return (
                          <li key={index} className={item.cName}>
                              <Link to={item.path}>
                                  <span className="linspan">{item.title}</span>
                              </Link>
                          </li>
                      )
                  })}
                    </ul>
                </nav>
                {/* <div >
                    <button onClick={showWindow}>ttest</button>
                </div> */}
            </div>
            <div className="div-toggler">
            <Link to="#" className="menu-bars" >
                  <FaIcons.FaBars onClick={showSidebar}/>   
            </Link>
            </div>
          </div>  



          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
              <ul className='nav-menu-items'>
                  <li className='navbar-toggle'>
                      <Link to='#' className='menu-bars'>
                          <AiIcons.AiOutlineClose onClick={showSidebar}/>
                      </Link>
                  </li>
                  {SidebarData.map((item,index)=>{
                      return (
                          <li key={index} className={item.cName}>
                              <Link to={item.path}>
                                  <span className="linspan">{item.title}</span>
                              </Link>
                          </li>
                      )
                  })}
              </ul>
          </nav>
         <MainWindow value={changeWindow}/>
        </>
    )
}

 


