import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/img/cw-logo.png';
import Login from "./Login.jsx";
import { AppState } from "../AppState.js";
import { observer } from "mobx-react";

function Navbar() {

  const cartCount = AppState.cartItems.length

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand d-flex" to={''}>
        <div className="d-flex flex-column align-items-center">
          <img alt="logo" src={logo} height="45" />
        </div>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto">
          <li>
            <Link to={'cart'} className="btn text-success lighten-30 selectable text-uppercase">
              <i className="mdi mdi-cart"></i>
              <span>
                <b>{cartCount}</b> Cart
              </span>
            </Link>
          </li>
        </ul>
        <Login />
      </div >
    </nav >
  )
}

export default observer(Navbar)