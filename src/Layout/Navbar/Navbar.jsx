import React, { useRef,useState,useEffect } from 'react';
import {FaTimes,FaBars} from "react-icons/fa"
import {getTopNav} from "../../data/navbarData"
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [navItem, setNavItem] = useState([]);
  useEffect(() => {
    setNavItem(getTopNav())
}, [])

  const navRef = useRef();
  const showNav = () => {
    navRef.current.classList.toggle("responsive")
  }
  return (
    <nav className='navbar'>
      <div className="container">
      <button className='nav-res-btn' onClick={showNav}><FaBars/></button>
        <h1 className="logo">Lumin</h1>
        <div className='mobilMenu links' ref={navRef}>
        <button className='nav-res-btn nav-close-btn' onClick={showNav}><FaTimes/></button>
        <ul className='links'>
       {navItem.map((item) =>
        <Link key={item.id} to={item.to} className='link'>{item.name}</Link>
       )}
        </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
