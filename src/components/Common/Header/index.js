import React from 'react'
import "./styles.css";
import TemporaryDrawer from './drawer';
const Header = () => {
  return (
    <div className='header'>
         <h1>
        Amay Crypto <span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links">
      <a href="/">
          <p className="link">Home</p>
        </a>
        <a href="/compare">
          <p className="link">Compare</p>
        </a>
        <a href="/watchlist">
          <p className="link">Watchlist</p>
        </a>
        <a href="/watchlist">
          <p className="link">Dashboard</p>
        </a>
        
      </div>
      <div className="drawer-component">
        <TemporaryDrawer />
      </div>
    </div>
  )
}

export default Header