import React from 'react';
import Footer from "../../components/Footer";

const Login = (props) => {

    return (
        <div className="bg-gray-200">

            <main className="main-content  mt-0">
                <div className="page-header align-items-start min-vh-100"
                     style={{backgroundImage: "url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80');"}}>
                    <span className="mask bg-gradient-dark opacity-6"></span>
                    <div className="container my-auto">
                        <div className="row">
                            <div className="col-lg-4 col-md-8 col-12 mx-auto">
                                <div className="card z-index-0 fadeIn3 fadeInBottom">
                                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                        <div className="bg-gradient-dark shadow-dark border-radius-lg py-3 pe-1">
                                            <h3 className="text-white font-weight-bolder text-center mt-2 mb-0">
                                                eProfiling System
                                            </h3>
                                            <hr className="light horizontal"/>
                                            <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">Sign
                                                in</h4>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <form role="form" className="text-start">
                                            <div className="input-group input-group-outline my-3">
                                                <label className="form-label">Email</label>
                                                <input type="email" className="form-control"/>
                                            </div>
                                            <div className="input-group input-group-outline mb-3">
                                                <label className="form-label">Password</label>
                                                <input type="password" className="form-control"/>
                                            </div>

                                            <div className="text-center">
                                                <button type="button"
                                                        className="btn bg-gradient-dark w-100 my-4 mb-2">Sign in
                                                </button>
                                            </div>
                                            <p className="mt-4 text-sm text-center">
                                                Don't have an account?&nbsp;
                                                <a href="../pages/sign-up.html"
                                                   className="text-primary text-gradient font-weight-bold">Sign up</a>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <footer className="footer position-absolute bottom-2 py-2 w-100">
                            <div className="container">
                                <div className="row align-items-center justify-content-lg-between">
                                    <div className="col-12 col-md-6 my-auto">
                                        <div className="copyright text-center text-sm text-white text-lg-start">
                                            © 2023
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                                            <li className="nav-item">
                                                <a href={'#'} className="nav-link text-white"
                                                   target="_blank">HIT 400 - Capstone Project</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>

                </div>
            </main>
        </div>
    );
}

export default Login;
