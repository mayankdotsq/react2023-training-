import React from 'react'
const Header = () => {

    return (<>
<header className="site-header">
  <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container">
      <a className="navbar-brand" href="#">
        <img src="assets/images/logo.png" alt="logo" />
      </a>
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
            <a className="nav-link active" href="#" aria-expanded="false">
              Home
            </a>
          </li>
          <li className="nav-item">
            {" "}
            <a className="nav-link" href="#" aria-expanded="false">
              About Us
            </a>
          </li>
          <li className="nav-item">
            {" "}
            <a className="nav-link" href="#" aria-expanded="false">
              Help
            </a>
          </li>
          <li className="nav-item">
            {" "}
            <a className="nav-link" href="#" aria-expanded="false">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="head-right">
        <a href="#" className="btn-custom small">
          Login
        </a>
        <a href="#" className="btn-custom small black">
          Register
        </a>
        <a href="#" className="cart-btn">
          {" "}
          <img src="assets/images/cart-icon.png" alt="cart" /> <em>0</em>{" "}
        </a>
      </div>
    </div>
  </nav>
</header>

    </>)
}
export default Header