import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo.png";
import search_icon from "../../assets/search_icon.png";
import bell_icon from "../../assets/bell_icon.png";
import profile_img from "../../assets/profile_img.jpg";
import caret_icon from "../../assets/caret_icon.png";
import { logout } from "../../firebase";

const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
  const handleScroll = () => {
    if (!navRef.current) return;

    if (window.scrollY >= 80) {
      navRef.current.classList.add("nav-dark");
    } else {
      navRef.current.classList.remove("nav-dark");
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={Logo} alt="Logo" className="logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="Search" className="icons black-icon" />
        <p>Children</p>
        <img src={bell_icon} alt="Bell" className="icons black-icon" />
        <div className="navbar-profile">
          <img
            src={profile_img}
            alt="Profile"
            className="profile profile-img"
          />
          <img src={caret_icon} alt="Caret" className="black-icon caret" />
          <div className="dropdown">
            <p onClick={()=>{logout()}}>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
