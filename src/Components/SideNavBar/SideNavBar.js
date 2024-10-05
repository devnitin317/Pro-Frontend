import React, { useState } from "react";
import { Outlet, useOutletContext, Link } from "react-router-dom";
import "./SideNavBar.css";
import profile1 from "../../Images/user.jpg";
import profile2 from "../../Images/user-icon.png";
import homeIcon from "../../Images/home-icon.png";
import testIcon from "../../Images/test-icon.png";
import practiceIcon from "../../Images/practice-icon.png";
import logoutIcon from "../../Images/logout-icon.png";
import settingsIcon from "../../Images/setting-icon.png";

import { RxHamburgerMenu } from "react-icons/rx";
// import Link from 'react-router-dom'
export const SideNavBar = ({ loginStatus, userEmail }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  // const [isActive, setIsActive] = useState(false);

  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (item) => {
    setActiveItem(item);
    // toggleNavbar()
  };
  const openSubMenu = (item, childArr) => {
    // if (child !=="haveChild") {
    setIsVisible((prev) => !prev);

    // }
    handleClick(item);
  };
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sideNavBar-Main">
      <div className="sideNavBar-Content">
        {/* <div className='SideNavBar-Left'>SideNavBar</div> */}
        <div
          id={`SideNavBar-Left ${
            isOpen ? "sideNavMobOpen" : "sideNavMobClose"
          }`}
          className={`SideNavBar-Left ${
            isOpen ? "sidebarOpen" : "sidebarClosed"
          }`}
        >
          <div
            className={`SideNavBar-Left-Content ${
              isOpen ? "" : "sidebarMinimiseAlign"
            }`}
          >
            {/* <div className="SideNavBar-Left-Content"> */}

            <div class="SideNavBar-Left-Head">
              <div
                class={`SideNavBar-Left-User-Img  ${
                  isOpen ? "" : "sidebarMinimise"
                }`}
              >
                <img src={profile2} alt="" />
              </div>
              <div
                className={`SideNavBar-Left-User-Details ${
                  isOpen ? "" : "sidebarMinimise"
                }`}
              >
                <span class="SideNavBar-Left-User-Title">STUDENT</span>
                <span class="SideNavBar-Left-User-Name">{userEmail}</span>
              </div>
            </div>
            <div className="SideNavBar-Left-Nav">
              <div className="SideNavBar-Left-Menu">
                {/* <p className="SideNavBar-Left-Title">Main</p> */}
                <p
                  className={`SideNavBar-Left-Title ${
                    isOpen ? "" : "sidebarMinimiseAlign"
                  }`}
                >
                  Main
                </p>

                <ul>
                  {/* <li className="SideNavBar-Left-Nav-Li"> */}
                  <li
                    className={`SideNavBar-Left-Nav-Li ${
                      activeItem === "dashboard" ? "active" : ""
                    }`}
                    onClick={() => handleClick("dashboard")}
                  >
                    <Link
                      to="/dashBoardHome"
                      // href="#"
                      className={`${isOpen ? "" : "sidebarMinimise"}`}
                      data-toolTip="DashBoard"
                    >
                      {/* <i class="icon ph-bold ph-house-simple"></i> */}
                      <img
                        className="SideNavBar-Left-Nav-Li-img"
                        src={homeIcon}
                      />

                      <span
                        className={`text ${isOpen ? "" : "sidebarMinimise"}`}
                      >
                        Dashboard
                      </span>
                    </Link>
                  </li>
                  {/* <li className="SideNavBar-Left-Nav-Li" onClick={openSubMenu}> */}
                  {/* <li
                    className={`SideNavBar-Left-Nav-Li ${
                      activeItem === "audience" ? "active" : ""
                    }`}
                  >
                    <a
                      href="#"
                      data-toolTip="Audience"
                      className={`${isOpen ? "" : "sidebarMinimise"}`}
                      onClick={() => openSubMenu("audience")}
                    >
                      <i class="icon ph-bold ph-user"></i>
                      <span
                        className={`text ${isOpen ? "" : "sidebarMinimise"}`}
                      >
                        Audience
                      </span>
                      <i
                        className={`arrow ph-bold ph-caret-down ${
                          isOpen ? "" : "sidebarMinimise"
                        }`}
                      ></i>
                    </a>
                    <ul
                      className={`SideNavBar-Left-Nav-Li-Sub-Menu ${
                        isVisible ? "show-SubMenu" : ""
                      } ${isOpen ? "" : "show-Minimise-Submenu"}`}
                    >
                      {console.log(isVisible)}
                      <li
                        className={`SideNavBar-Left-Nav-Li-Sub-Menu-Li ${
                          activeItem === "users" ? "active" : ""
                        }`}
                        onClick={() => handleClick("users")}
                      >
                        <a
                          href="#"
                          className="SideNavBar-Left-Nav-Li-Sub-Menu-Li-a"
                        >
                          <span class="SideNavBar-Left-Nav-Li-Sub-Menu-Text">
                            Users
                          </span>
                        </a>
                      </li>

                      <li
                        className={`SideNavBar-Left-Nav-Li-Sub-Menu-Li ${
                          activeItem === "subscribers" ? "active" : ""
                        }`}
                        onClick={() => handleClick("subscribers")}
                      >
                        <a
                          href="#"
                          className="SideNavBar-Left-Nav-Li-Sub-Menu-Li-a"
                        >
                          <span class="SideNavBar-Left-Nav-Li-Sub-Menu-Text">
                            Subscribers
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li> */}

                  <li
                    className={`SideNavBar-Left-Nav-Li ${
                      activeItem === "PracticeHome" ? "active" : ""
                    }`}
                    onClick={() => handleClick("PracticeHome")}
                  >
                    <Link
                      to="/practiceHome"
                      href="#"
                      className={`${isOpen ? "" : "sidebarMinimise"}`}
                      data-toolTip="PracticeHome"
                    >
                      {/* <i class="icon ph-bold ph-file-text"></i> */}
                      <img
                        className="SideNavBar-Left-Nav-Li-img"
                        src={practiceIcon}
                      />
                      <span
                        className={`text ${isOpen ? "" : "sidebarMinimise"}`}
                      >
                        PracticeHome
                      </span>
                    </Link>
                  </li>
                  <li
                    className={`SideNavBar-Left-Nav-Li ${
                      activeItem === "MockTests" ? "active" : ""
                    }`}
                    onClick={() => handleClick("MockTests")}
                  >
                    <Link
                      to="/mockTests"
                      href="#"
                      className={`${isOpen ? "" : "sidebarMinimise"}`}
                      data-toolTip="MockTests"
                    >
                      {/* <i class="icon ph-bold ph-file-text"></i> */}
                      <img
                        className="SideNavBar-Left-Nav-Li-img"
                        src={testIcon}
                      />

                      <span
                        className={`text ${isOpen ? "" : "sidebarMinimise"}`}
                      >
                        Mock Tests
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="SideNavBar-Left-Menu">
                <p className="SideNavBar-Left-Title">Settings</p>
                <ul>
                  <li
                    className={`SideNavBar-Left-Nav-Li ${
                      activeItem === "settings" ? "active" : ""
                    }`}
                    onClick={() => handleClick("settings")}
                  >
                    <a
                      href="#"
                      className={`${isOpen ? "" : "sidebarMinimise"}`}
                      data-toolTip="Settings"
                    >
                      <i class="icon ph-bold ph-gear"></i>
                      <span
                        className={`text ${isOpen ? "" : "sidebarMinimise"}`}
                      >
                        Settings
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="SideNavBar-Left-Menu">
                <p className="SideNavBar-Left-Title">Account</p>
                <ul>
                  {/* <li
                    className={`SideNavBar-Left-Nav-Li ${
                      activeItem === "plans" ? "active" : ""
                    }`}
                    onClick={() => handleClick("plans")}
                  >
                    <Link
                      to='/plans'
                      className={`${isOpen ? "" : "sidebarMinimise"}`}
                      data-toolTip="Plans"
                    >
                      <i class="icon ph-bold ph-house-simple"></i>
                      <span
                        className={`text ${isOpen ? "" : "sidebarMinimise"}`}
                      >
                        Plans
                      </span>
                    </Link>
                  </li> */}
                 

                  <li
                    className={`SideNavBar-Left-Nav-Li ${
                      activeItem === "logOut" ? "active" : ""
                    }`}
                    onClick={() => handleClick("logOut")}
                  >
                    <Link
                      onClick={() => loginStatus("logout")}
                      href="#"
                      className={`${isOpen ? "" : "sidebarMinimise"}`}
                      data-toolTip="Logout"
                    >
                      {/* <i class="icon ph-bold ph-house-simple"></i> */}
                      <img
                        className="SideNavBar-Left-Nav-Li-img"
                        src={logoutIcon}
                      />

                      <span
                        className={`text ${isOpen ? "" : "sidebarMinimise"}`}
                      >
                        LogOut
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="sideNav-Top-Menu-Btn">
            <RxHamburgerMenu onClick={toggleNavbar}/>
          </div> */}
        </div>

        <div
          className={`SideNavBar-Right ${isOpen ? "" : "increaseWidthRight"}`}
        >
          <Outlet context={{ toggleNavbar, isOpen }} />
        </div>
      </div>
    </div>
  );
};
