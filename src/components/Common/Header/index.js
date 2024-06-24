import React, { useEffect, useState } from 'react'
import "./styles.css";
import Button from "../Button";
import TemporaryDrawer from './drawer';
import Switch from "@mui/material/Switch";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
const Header = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") == "dark" ? true : false
      );
    
      useEffect(() => {
        if (localStorage.getItem("theme") == "dark") {
          setDark();
        } else {
          setLight();
        }
      }, []);
    
      const changeMode = () => {
        if (localStorage.getItem("theme") != "dark") {
          setDark();
        } else {
          setLight();
        }
        setDarkMode(!darkMode);
        toast.success("Theme Changed!");
      };
    
      const setDark = () => {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
      };
    
      const setLight = () => {
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
      };
    
  return (
    <div className='header'>
         <h1>
        Amay Crypto <span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links">
      <Switch checked={darkMode} onClick={() => changeMode()} />
      <Link to="/">
          <p clLinkssName="link">Home</p>
        </Link>
        <Link to="/compare">
          <p className="link">Compare</p>
        </Link>
        <Link to="/watchlist">
          <p className="link">Watchlist</p>
        </Link>
        <Link to="/dashboard">
        <Button text="dashboard" />
        </Link>
        
      </div>
      <div className="drawer-component">
        <TemporaryDrawer />
      </div>
    </div>
  )
}

export default Header