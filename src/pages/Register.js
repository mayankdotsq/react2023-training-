import React from 'react'

const Register = () => {
  return (
    <div className="inner-page">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="login-section">
              <div className="login-sec">
                <div className="row no-gutters">
                  <div className="left-log-bar bg-black d-flex flex-wrap">
                    <div className="login-left-bg">
                      <img
                        src="assets/images/register-no-img.jpg"
                        className="mt-auto"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="right-log-bar bg-white d-flex flex-wrap">
                    <div className="loginForm">
                      <h2>Create account</h2>
                      <div className="form-group">
                        <label>First Name</label>
                        <input
                          type="text"
                          name="firstname"
                          placeholder="First Name"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label>Last Name</label>
                        <input
                          type="text"
                          name="lastname"
                          placeholder="Last Name"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label>Email Address</label>
                        <input
                          type="text"
                          placeholder="Email Address"
                          name="email"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          type="password"
                          placeholder="Password"
                          name="password"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                          type="password"
                          placeholder="Confirm Password"
                          name="password"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <div className="bottom-box">
                          <div className="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                            <label className="custom-box">
                              {" "}
                              I accept T&amp;C / Privacy Policy{" "}
                              <input
                                type="checkbox"
                                formcontrolname="rememberMe"
                                className="checkmark ng-untouched ng-pristine ng-valid"
                              />
                              <span className="checkmark" />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group submit-btn-row">
                        <input
                          type="submit"
                          defaultValue="Submit"
                          className="btn-custom"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Register