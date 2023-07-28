import React from 'react'
const Footer = () => {

    return (
        <>
        <footer className="footer">
  <div className="foot-top">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-xl-4">
          <h2 className="bdr">About Company</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="col-lg-8 col-xl-8">
          <div className="row">
            <div className="col-12">
              <div className="foot-payment-logo">
                <ul>
                  <li>
                    <img src="assets/images/visa.jpg" alt="Visa" />
                  </li>
                  <li>
                    <img src="assets/images/mastercard.jpg" alt="Mastercard" />
                  </li>
                  <li>
                    <img src="assets/images/paypal.jpg" alt="PayPal" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="foot-link">
                <span className="link-title">Quick LInks</span>
                <ul>
                  <li>
                    <a href="#">Contacat Us</a>
                  </li>
                  <li>
                    <a href="#">Sign in</a>
                  </li>
                  <li>
                    <a href="#">Sign up</a>
                  </li>
                  <li>
                    <a href="#">Suggest a Restaurant</a>
                  </li>
                  <li>
                    <a href="#">Help</a>
                  </li>
                  <li>
                    <a href="#">My account</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="foot-link">
                <span className="link-title">A Bit More About Us</span>
                <ul>
                  <li>
                    <a href="#">Restaurant Sign up</a>
                  </li>
                  <li>
                    <a href="#">How do we use cookies ?</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy/T&amp;Cs</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Company website</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="foot-link">
                <span className="link-title">Store Information</span>
                <p>
                  <i className="fas fa-map-marker-alt" /> address: Lorem ipsum
                  dolor sit amet, Onsectetuer adipiscing elit.
                </p>
                <p>
                  <i className="fas fa-envelope" /> email: info@companyname.com
                </p>
                <p>
                  <i className="fas fa-phone-alt" /> phone:000 000 000
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="foot-bottom">
    <div className="container">
      <div className="row">
        <div className="col-sm-7">
          <p>© 2021 companyname.com.All Rights Reserved.</p>
        </div>
        <div className="col-sm-5">
          <ul className="social-icon">
            <li>
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-dribbble" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-vimeo" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>

        </>
    );
}
export default Footer