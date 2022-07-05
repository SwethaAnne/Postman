import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import Profile from "./profile";
var services = require('../services');

function Navbar({isLoggedIn}) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" style={{height: '10vh'}}>
      <div className="container-fluid">
        <a className="navbar-brand text-white">
          Assignment
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {!isLoggedIn && 
                      <>
                        <li className="nav-item">
                          <a className="text-white text-decoration-none" href="/">Login</a>
                        </li>
                        <li className="nav-item mx-5">
                            <a className="text-white text-decoration-none" href="/register">Register</a>
                        </li>
                      </>
                    }
                    {isLoggedIn && 
                      <>
                        <li className="nav-item">
                          <a className="text-white text-decoration-none" href="/profile">Profile</a>
                      </li>
                      </>
                    }
                </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
