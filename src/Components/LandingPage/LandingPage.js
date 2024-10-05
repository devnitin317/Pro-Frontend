import React, { useState } from "react";
import "./LandingPage.css";
import logo from "../../Images/nexcentLogo.png";
import registerButton from "../../Images/registerButton.png";
import girl from "../../Images/girlWithLaptop.jpeg";
import RegisterModal from "../RegisterModal/RegisterModal";
import PaymentModal from "../PaymentModal/PaymentModal";
import SideNavLandingPage from "../SideNavLandingPage/SideNavLandingPage";
import { RxHamburgerMenu } from "react-icons/rx";
import Popup from "../CommonComponents/Popup/Popup";
// import { Link } from "react-router-dom";
function LandingPage({ loggedIn, loginStatus, userEmail }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [sideNav, SetSideNav] = useState(false);
  const [amount, setAmount] = useState(0);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const togglePaymentModal = () => {
    setIsPaymentOpen(!isPaymentOpen);
  };
  function amountAndModalFunc(amo) {
    setAmount(amo);
    setIsPaymentOpen(true);
    setIsOpen(true);
  }
  function openModalFunc(params) {
    if (loggedIn) {
      return (
        <PaymentModal
          amount={amount}
          isPaymentOpen={isPaymentOpen}
          toggleModal={togglePaymentModal}
          userEmail={userEmail}
          loginStatus={loginStatus}
        />
      );
    } else {
      // setIsOpen(true)
      return (
        <RegisterModal
          isOpen={isOpen}
          close={toggleModal}
          title="Register"
          loginStatus={loginStatus}
        />
      );
    }
  }
  function toggleNavbar() {
    SetSideNav(!sideNav);
  }
  function closeSideNav() {
    // alert("close")
    SetSideNav(!sideNav);
  }
  return (
    <div className="landingPage-main">
      {sideNav ? (
        <SideNavLandingPage
          sideNav={sideNav}
          close={closeSideNav}
          registerModal={toggleModal}
        />
      ) : (
        <></>
      )}
      <div className="landingPage-content">
        <div id="home" className="landingPage-content-nav">
          <div
            className={`landingPage-content-nav-menuButton`}
            onClick={toggleNavbar}
          >
            <RxHamburgerMenu className="landingPage-content-navhambuger-menu" />
          </div>

          <div className="landingPage-content-nav-left">
            <img src={logo} />
          </div>
          <div className="landingPage-content-nav-right">
            <div className="landingPage-content-nav-right-links">
              <a href="#" className="landingPage-content-nav-right-links-a">
                Home
              </a>
              <a
                href="#plans"
                className="landingPage-content-nav-right-links-a"
              >
                Plans
              </a>
              <a href="#" className="landingPage-content-nav-right-links-a">
                About Us
              </a>
            </div>

            <button
              onClick={toggleModal}
              className="landingPage-content-nav-right-button"
            >
              Register Now
            </button>
            {loggedIn == true ? (
              <div className="landingPage-content-nav-right-user">
                <Popup
                  message={"loggedIn successfully"}
                  duration={3000}
                  popType={"Success"}
                />
                <span className="landingPage-content-nav-right-user-email">
                  {userEmail}
                </span>
                <button
                  onClick={() => loginStatus("logout")}
                  className="landingPage-content-nav-right-user-button"
                >
                  Logout
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        {openModalFunc()}
        <div className="landingPage-content-heroSection">
          <div className="landingPage-content-heroSection-text">
            <h1>Ace the PTE with Our Comprehensive Practice Material</h1>
            <p>
              Are you ready to conquer the Pearson Test of English (PTE) and
              unlock your global potential? Look no further than our
              cutting-edge website, where you'll find the ultimate PTE practice
              material to help you achieve your desired score.
            </p>
            <button
              onClick={toggleModal}
              className="landingPage-content-heroSection-button"
            >
              Register Now
            </button>
          </div>
          <div className="landingPage-content-heroSection-image">
            <img src={girl} />
          </div>
        </div>
        <div id="plans" className="landingPage-content-plansSection">
          <div className="landingPage-content-plansSection-top">
            <h1>
              <span className="landingPage-content-plansSection-top-span">
                Flexible
              </span>{" "}
              Plans
            </h1>
            <p className="landingPage-content-plansSection-top-p">
              Choose a plan that works best for you
            </p>
          </div>
          <div className="landingPage-content-plansSection-cards">
            {/* Card 1 */}
            <div className="landingPage-content-plansSection-card">
              <div className="landingPage-content-plansSection-card-top">
                <p className="landingPage-content-plansSection-card-duration">
                  1-Month
                </p>
                <p className="landingPage-content-plansSection-card-desc">
                  Pte Mocktests
                </p>
              </div>
              <div className="landingPage-content-plansSection-card-bottom">
                <p className="landingPage-content-plansSection-card-price">
                  ₹ 850
                </p>
                <button
                  onClick={() => amountAndModalFunc(850)}
                  className="landingPage-content-plansSection-card-button"
                >
                  Choose Plan
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="landingPage-content-plansSection-card">
              <div className="landingPage-content-plansSection-card-top">
                <p className="landingPage-content-plansSection-card-duration">
                  2-Month
                </p>
                <p className="landingPage-content-plansSection-card-desc">
                  Pte Mocktests
                </p>
              </div>
              <div className="landingPage-content-plansSection-card-bottom">
                <p className="landingPage-content-plansSection-card-price">
                  ₹ 1500
                </p>
                <button
                  onClick={() => amountAndModalFunc(1500)}
                  className="landingPage-content-plansSection-card-button"
                >
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="landingPage-content-footerSection">
          <div className="landingPage-content-footerSection-top">
            <div className="landingPage-content-footerSection-top-left">
              <div className="landingPage-content-footerSection-top-left-logo">
                <img src={logo} />
              </div>
              <div className="landingPage-content-footerSection-top-left-links">
                <a className="landingPage-content-footerSection-top-left-links-a">
                  Pricing
                </a>
                <a className="landingPage-content-footerSection-top-left-links-a">
                  About US
                </a>
                <a className="landingPage-content-footerSection-top-left-links-a">
                  Help
                </a>
                <a className="landingPage-content-footerSection-top-left-links-a">
                  Privacy
                </a>
              </div>
            </div>
            <div className="landingPage-content-footerSection-top-right">
              <p>Join our newsletter</p>
              <div className="landingPage-content-footerSection-top-right-inputAndButton">
                <input className="landingPage-content-footerSection-top-right-input" />
                <button className="landingPage-content-footerSection-top-right-button">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="landingPage-content-footerSection-bottom">
            <div className="landingPage-content-footerSection-bottom-content">
              <div className="landingPage-content-footerSection-bottom-left">
                <p>&copy; 2024 All rights reserved</p>
              </div>
              <div className="landingPage-content-footerSection-bottom-right">
                <div className="landingPage-content-footerSection-bottom-right-links">
                  <a>Term</a>
                  <a>Privacy</a>
                  <a>Cookies</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
