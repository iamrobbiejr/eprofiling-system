import React from 'react';
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const ViewPlayer = (props) => {

    return (
        <div>
            <SideBar/>
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                <NavBar/>
                <div className="container-fluid px-2 px-md-4">
                    <div className="page-header min-height-300 border-radius-xl mt-4"
                         style={{backgroundImage: '../assets/img/bg.png'}}>
                        <span className="mask  bg-gradient-dark  opacity-6"></span>
                    </div>
                    <div className="card card-body mx-3 mx-md-4 mt-n6">
                        <div className="row gx-4 mb-2">
                            <div className="col-auto">
                                <div className="avatar avatar-xl position-relative">
                                    <img src="../assets/img/players/rash.png" alt="profile_image"
                                         className="w-100 border-radius-lg shadow-sm"/>
                                </div>
                            </div>
                            <div className="col-auto my-auto">
                                <div className="h-100">
                                    <h5 className="mb-1">
                                        Player Name
                                    </h5>
                                    <p className="mb-0 font-weight-normal text-sm">
                                        Position
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="row">
                                <div className="col-12 col-xl-6">
                                    <div className="card card-plain h-100">
                                        <div className="card-header pb-0 p-3">
                                            <div className="row">
                                                <div className="col-md-8 d-flex align-items-center">
                                                    <h6 className="mb-0">Profile Information</h6>
                                                </div>
                                                <div className="col-md-4 text-end">
                                                    {/*<a href={'#'}>*/}
                                                    {/*    <i className="fas fa-user-edit text-secondary text-sm"*/}
                                                    {/*       data-bs-toggle="tooltip" data-bs-placement="top"*/}
                                                    {/*       title="Edit Profile"></i>*/}
                                                    {/*</a>*/}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body p-3">
                                            <p className="text-sm">
                                                Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no.
                                                If
                                                two equally difficult paths, choose the one more painful in the short
                                                term
                                                (pain avoidance is creating an illusion of equality).
                                            </p>
                                            <hr className="horizontal gray-light my-4"/>
                                            <ul className="list-group">
                                                <li className="list-group-item border-0 ps-0 pt-0 text-sm"><strong
                                                    className="text-dark">Full Name:</strong> &nbsp; Alec M. Thompson
                                                </li>
                                                <li className="list-group-item border-0 ps-0 text-sm"><strong
                                                    className="text-dark">National Identification
                                                    Number:</strong> &nbsp; Alec M. Thompson
                                                </li>
                                                <li className="list-group-item border-0 ps-0 text-sm"><strong
                                                    className="text-dark">Date Of Birth:</strong> &nbsp; 10 May 1998
                                                </li>
                                                <li className="list-group-item border-0 ps-0 text-sm"><strong
                                                    className="text-dark">Age:</strong> &nbsp; 25
                                                </li>
                                                <li className="list-group-item border-0 ps-0 text-sm"><strong
                                                    className="text-dark">Height(cm):</strong> &nbsp; 170
                                                </li>
                                                <li className="list-group-item border-0 ps-0 text-sm"><strong
                                                    className="text-dark">Nationality:</strong> &nbsp; USA
                                                </li>
                                                <li className="list-group-item border-0 ps-0 pb-0">
                                                    <strong className="text-dark text-sm">Teams Played
                                                        For:</strong> &nbsp;
                                                    <a className="btn btn-facebook btn-simple mb-0 ps-1 pe-2 py-0"
                                                       href={'#'}>
                                                        <span
                                                            className="badge badge-sm bg-gradient-success">CAPS United</span>
                                                    </a>
                                                    <a className="btn btn-twitter btn-simple mb-0 ps-1 pe-2 py-0"
                                                       href={'#'}>
                                                       <span
                                                           className="badge badge-sm bg-gradient-success">Dynamos FC</span>
                                                    </a>
                                                    <a className="btn btn-instagram btn-simple mb-0 ps-1 pe-2 py-0"
                                                       href={'#'}>
                                                        <span
                                                            className="badge badge-sm bg-gradient-success">Chicken Inn FC</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-6">
                                    <div className="card card-plain h-100">
                                        <div className="card-header pb-0 p-3">
                                            <h6 className="mb-0">History Data</h6>
                                        </div>
                                        <div className="card-body p-3">
                                            <div className="timeline timeline-one-side">
                                                <div className="timeline-block mb-3">
                  <span className="timeline-step">
                    <i className="material-icons text-success text-gradient">notifications</i>
                  </span>
                                                    <div className="timeline-content">
                                                        <h6 className="text-dark text-sm font-weight-bold mb-0">$2400,
                                                            Design changes</h6>
                                                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">22
                                                            DEC 7:20 PM</p>
                                                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                                                            Out for 6 weeks
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="timeline-block mb-3">
                  <span className="timeline-step">
                  <i className="material-icons text-success text-gradient">notifications</i>
                  </span>
                                                    <div className="timeline-content">
                                                        <h6 className="text-dark text-sm font-weight-bold mb-0">New
                                                            order
                                                            #1832412</h6>
                                                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">21
                                                            DEC 11 PM</p>
                                                    </div>
                                                </div>
                                                <div className="timeline-block mb-3">
                  <span className="timeline-step">
                   <i className="material-icons text-success text-gradient">notifications</i>
                  </span>
                                                    <div className="timeline-content">
                                                        <h6 className="text-dark text-sm font-weight-bold mb-0">Server
                                                            payments for April</h6>
                                                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">21
                                                            DEC 9:34 PM</p>
                                                    </div>
                                                </div>
                                                <div className="timeline-block mb-3">
                  <span className="timeline-step">
                    <i className="material-icons text-success text-gradient">notifications</i>
                  </span>
                                                    <div className="timeline-content">
                                                        <h6 className="text-dark text-sm font-weight-bold mb-0">New card
                                                            added for order #4395133</h6>
                                                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">20
                                                            DEC 2:20 AM</p>
                                                    </div>
                                                </div>
                                                <div className="timeline-block mb-3">
                  <span className="timeline-step">
                   <i className="material-icons text-success text-gradient">notifications</i>
                  </span>
                                                    <div className="timeline-content">
                                                        <h6 className="text-dark text-sm font-weight-bold mb-0">Unlock
                                                            packages for development</h6>
                                                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">18
                                                            DEC 4:54 AM</p>
                                                    </div>
                                                </div>
                                                <div className="timeline-block">
                  <span className="timeline-step">
                     <i className="material-icons text-success text-gradient">notifications</i>
                  </span>
                                                    <div className="timeline-content">
                                                        <h6 className="text-dark text-sm font-weight-bold mb-0">New
                                                            order
                                                            #9583120</h6>
                                                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">17
                                                            DEC</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </main>
        </div>
    );
}

export default ViewPlayer;
