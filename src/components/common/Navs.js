import React from 'react'
import { NavLink } from 'react-router-dom'
const Navs = () => {

    return (
        <>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                {" "}
                <span />
                <span />
                <span />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        {" "}
                        <NavLink className="nav-link" to="/" aria-expanded="false">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        {" "}
                        <NavLink className="nav-link" to="/about" aria-expanded="false">
                            About us
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        {" "}
                        <NavLink className="nav-link" to="/help" aria-expanded="false">
                            Help
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        {" "}
                        <NavLink className="nav-link" to="/contact" aria-expanded="false">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="head-right">

                <NavLink className="btn-custom small" to="/login">
                    Login
                </NavLink>

                <NavLink className="btn-custom small black" to="/register">
                    Register
                </NavLink>
                <a href="#" className="cart-btn">
                    {" "}
                    <img src="assets/images/cart-icon.png" alt="cart" /> <em>0</em>{" "}
                </a>
            </div>
        </>
    )
}

export default Navs