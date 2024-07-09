import React, { Component, useState } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import "./NavbarStyle.css";
import Signup from "./Signup";
import Login from './Login';

class Navbar extends Component {
  state = {
    clicked: false,
    popUp: false,
    sign:false,
    log:false
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  togglePopUp = () => {
    this.setState({ popUp: !this.state.popUp });
  };

  signUp = ()=>{
    this.setState({sign:!this.state.sign})
  }
  logIn = ()=>{
    this.setState({log:!this.state.log})
  }
  closeModal = () =>{
    this.setState({sign:false,log:false})
  }
  render() {
    return (<>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">TravFomo</h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((items, index) => (
            <li key={index}>
              <Link to={items.url} className={items.cName}>
                <i className={items.icon}></i> {items.title}
              </Link>
            </li>
          ))}
          <div
            onClick={this.togglePopUp}
            className="cursor-pointer flex items-center border border-spacing-1 rounded-full p-2 ml-80"
          >
            {this.state.popUp && (
              <div className="shadow-xl h-16 w-28 z-10 p-1 absolute bg-white mt-32">
                <h1 onClick={this.signUp} className="font-semibold text-sm">Sign up</h1>
                <hr className="mt-2" />
                <h1 onClick={this.logIn} className="font-thin text-sm">Login</h1>
              </div>
            )}

            <span class="material-symbols-outlined">menu</span>

            <span class="material-symbols-outlined">account_circle</span>
           
          </div>
        </ul>
      </nav>
       {this.state.sign &&<div className="overlay"> <Signup closeModal={this.closeModal} /></div>}
       {this.state.log &&<div className="overlay"> <Login closeModal={this.closeModal} /></div>}</>
    );
  }
}

export default Navbar;
