import React from 'react'

function Login() {
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
                                            <img src="assets/images/no-img.jpg" className="mt-auto" alt="img" />
                                        </div>
                                    </div>
                                    <div className="right-log-bar bg-white d-flex flex-wrap">
                                        <div className="loginForm">
                                            <h2>Login</h2>
                                            <div className="form-group">
                                                <label>Email Address</label>
                                                <input
                                                    type="text"
                                                    name="username"
                                                    placeholder="Email Address"
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
                                                <div className="bottom-box">
                                                    <div className="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                                                        <label className="custom-box">
                                                            {" "}
                                                            Remember Me{" "}
                                                            <input
                                                                type="checkbox"
                                                                formcontrolname="rememberMe"
                                                                className="checkmark ng-untouched ng-pristine ng-valid"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                    </div>
                                                    <a className="mt-2 pt-1" href="/forgot-password">
                                                        Forgot password?
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="form-group submit-btn-row">
                                                <input
                                                    type="submit"
                                                    defaultValue="Login"
                                                    className="btn-custom"
                                                />
                                            </div>
                                            <div className="forgotPassword">
                                                <a href="#">
                                                    Not a member? <strong>Create account</strong>
                                                </a>
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

export default Login