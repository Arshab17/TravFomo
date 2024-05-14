import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import {Link} from "react-router-dom"
import "./NavbarStyle.css";

class Navbar extends Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">TravFomo</h1>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((items, index) => (
                        <li key={index}>
                            <Link to={items.url} className={items.cName}>
                                <i className={items.icon}></i> {items.title}
                            </Link>
                        </li>
                    ))}
                    <button type="submit">sign up</button>
                </ul>
            </nav>
        );
    }
}

export default Navbar;