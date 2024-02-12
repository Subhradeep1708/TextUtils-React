import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Naav(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
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
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {props.aboutText}
              </a>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"              
            />
            <button className="btn btn-outline-danger" type="submit">
              Search
            </button>
          </form> */}
          {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input " onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label " htmlFor="flexSwitchCheckDefault"  >Enable Dark Mode</label>
          </div>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'red' : 'light'}`}>
            <input className="form-check-input mx-1 " onClick={props.toggleMode2} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label " htmlFor="flexSwitchCheckDefault"  >Enable Red Mode</label>
          </div> */}

          <div className="dropdown " >
            <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Themes
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" onClick={props.toggleMode} href="#">Dark Mode</a></li>
              <li><a className="dropdown-item" onClick={props.toggleMode2} href="#">Red Mode</a></li>
            </ul>
          </div>




        </div>
      </div>
    </nav>
  );
}

//  THIS IS CHECKPOINT => BY CHANCE NO NUMBER IS INPUTTED
Naav.propTypes = {
  title: PropTypes.string.isRequired, //isRequired == value must be given
  aboutText: PropTypes.string.isRequired,
};

Naav.defaultProps = {
  title: "Set Title here",
  aboutText: "Set About here",
};
