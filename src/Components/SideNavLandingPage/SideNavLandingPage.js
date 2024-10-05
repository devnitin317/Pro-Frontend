import React from 'react'
import './SideNavLandingPage.css'
import { Link } from 'react-router-dom';
function SideNavLandingPage({ sideNav,close,registerModal }) {
    if (sideNav === false) {
        return null;
      }

      function register(params) {
        close()
        registerModal()
      }
  return (
    <div className="side-Nav">
      <div className="side-nav-close-m">
        <div className="side-nav-close">
          {/* <IoClose onClick={close}/> */}
          <p onClick={close}>X</p>
        </div>
      </div>
          <div className="side-nav-links" onClick={close}>
          <a href='#home' className="side-nav-link">
            Home
          </a>
         <a href='#about' className="side-nav-link">
            About
          </a>
          <a href="#plans" className="side-nav-link">
            Plans
          </a>
          <a href="#" className="side-nav-link" onClick={register}>
            Register
          </a>
          </div>
    </div>
  ) 
}

export default SideNavLandingPage