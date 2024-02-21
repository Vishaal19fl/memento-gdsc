import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Navbar.scss";
import GoogleTranslate from "../googleTranslate/GoogleTranslate";
import { FaBars, FaTimes } from 'react-icons/fa';


function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const { pathname } = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    isActive(); // Set initial state based on scroll position
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);
  

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"} style={{ position: pathname === "/" ? "fixed" : "sticky" }}>
    {/* <div className="navbar" style={{ backgroundColor: (active || pathname !== "/") ? "#e85b24" : "#bf4b1d" }}></div>   */}
      <div className="container">
      
        <div className="logo">
        <span><img src="/img/logo1.png" width='55px' alt="" /></span>
          <Link className="link" to="/">
          
            <span className="text">Memento</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className={`links ${isMenuOpen ? 'active' : ''}`}>
          <Link className="link" to="/community"><span>Explore Culture</span></Link>
          <Link className="link" to="/maps"><span>View Offline Stores</span></Link>
          <Link className="link" to="/gigs?search=">
            Products
          </Link>
          {/* {currentUser?.isSeller && <span>Apply for Patent</span>} */}
          <Link className="link" to='/register?isSeller=true'>{!currentUser?.isSeller && <span>Become a Seller</span>}</Link>

          

          <GoogleTranslate />

          <Link className="link" to="/chatbot"><span>Customer Support</span></Link>

          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img className="profilepic" src={currentUser.img || "/img/noavatar.jpg"} alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        My Products
                      </Link>
                      <Link className="link" to="/add">
                        Add New Product
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="link">Sign in</Link>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
          
        </div>
        
      </div>
      
    </div>
  );
}

export default Navbar;
