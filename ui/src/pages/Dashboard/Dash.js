import React from 'react';
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import SideBar from "../../components/SideBar";

const Dash = (props) => {
    return (
        <div>
            <SideBar/>
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                <NavBar/>
                <div className="container-fluid py-4">
                    <div className="row">
                        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                            <div className="card">
                                <div className="card-header p-3 pt-2">
                                    <div
                                        className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                                        <i className="material-icons opacity-10">group</i>
                                    </div>
                                    <div className="text-end pt-1">
                                        <p className="text-sm mb-0 text-capitalize">Total Players</p>
                                        <h4 className="mb-0">50</h4>
                                    </div>
                                </div>
                                <hr className="dark horizontal my-0" />
                                    <div className="card-footer p-3">
                                        <p className="mb-0"></p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                            <div className="card">
                                <div className="card-header p-3 pt-2">
                                    <div
                                        className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                                        <i className="material-icons opacity-10">person</i>
                                    </div>
                                    <div className="text-end pt-1">
                                        <p className="text-sm mb-0 text-capitalize">Defenders</p>
                                        <h4 className="mb-0">20</h4>
                                    </div>
                                </div>
                                <hr className="dark horizontal my-0" />
                                    <div className="card-footer p-3">
                                        <p className="mb-0"></p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                            <div className="card">
                                <div className="card-header p-3 pt-2">
                                    <div
                                        className="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                                        <i className="material-icons opacity-10">person</i>
                                    </div>
                                    <div className="text-end pt-1">
                                        <p className="text-sm mb-0 text-capitalize">Midfielders</p>
                                        <h4 className="mb-0">10</h4>
                                    </div>
                                </div>
                                <hr className="dark horizontal my-0" />
                                    <div className="card-footer p-3">
                                        <p className="mb-0">
                                        </p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="card">
                                <div className="card-header p-3 pt-2">
                                    <div
                                        className="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                                        <i className="material-icons opacity-10">person</i>
                                    </div>
                                    <div className="text-end pt-1">
                                        <p className="text-sm mb-0 text-capitalize">Forwards</p>
                                        <h4 className="mb-0">10</h4>
                                    </div>
                                </div>
                                <hr className="dark horizontal my-0"/>
                                <div className="card-footer p-3">
                                    <p className="mb-0"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4 mt-5">
                        <div className="col-lg-3 col-md-6 mt-4 mb-4">
                            <div className="card z-index-2 ">
                                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                                    <div className="bg-gradient-dark shadow-dark border-radius-lg py-3 pe-1">
                                        <img src="../assets/img/players/rash.png" alt="profile_image"
                                             className="w-100 border-radius-lg shadow-sm"/>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h6 className="mb-0 ">Player Name</h6>
                                    <p className="text-sm ">Position</p>
                                    <p className="text-sm ">Age</p>
                                    <p className="text-sm ">Nationality</p>
                                    <hr className="dark horizontal"/>
                                    <div className="d-flex ">
                                        <p className="mb-0 text-sm">
                                            <a href={'/player'} className="btn btn-sm btn-primary">View Player</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-4 mb-4">
                            <div className="card z-index-2 ">
                                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                                    <div className="bg-gradient-dark shadow-dark border-radius-lg py-3 pe-1">
                                        <img src="../assets/img/players/lisandro.png" alt="profile_image"
                                             className="w-100 border-radius-lg shadow-sm"/>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h6 className="mb-0 ">Player Name</h6>
                                    <p className="text-sm ">Position</p>
                                    <p className="text-sm ">Age</p>
                                    <p className="text-sm ">Nationality</p>
                                    <hr className="dark horizontal"/>
                                    <div className="d-flex ">
                                        <p className="mb-0 text-sm">
                                            <a href={'/player'} className="btn btn-sm btn-primary">View Player</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-4 mb-4">
                            <div className="card z-index-2 ">
                                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                                    <div className="bg-gradient-dark shadow-dark border-radius-lg py-3 pe-1">
                                        <img src="../assets/img/players/antony.png" alt="profile_image"
                                             className="w-100 border-radius-lg shadow-sm"/>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h6 className="mb-0 ">Player Name</h6>
                                    <p className="text-sm ">Position</p>
                                    <p className="text-sm ">Age</p>
                                    <p className="text-sm ">Nationality</p>
                                    <hr className="dark horizontal"/>
                                    <div className="d-flex ">
                                        <p className="mb-0 text-sm">
                                            <a href={'/player'} className="btn btn-sm btn-primary">View Player</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-4 mb-4">
                            <div className="card z-index-2 ">
                                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                                    <div className="bg-gradient-dark shadow-dark border-radius-lg py-3 pe-1">
                                        <img src="../assets/img/players/donny.png" alt="profile_image"
                                             className="w-100 border-radius-lg shadow-sm"/>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h6 className="mb-0 ">Player Name</h6>
                                    <p className="text-sm ">Position</p>
                                    <p className="text-sm ">Age</p>
                                    <p className="text-sm ">Nationality</p>
                                    <hr className="dark horizontal"/>
                                    <div className="d-flex ">
                                        <p className="mb-0 text-sm">
                                            <a href={'/player'} className="btn btn-sm btn-primary">View Player</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-4 mb-4">
                            <div className="card z-index-2 ">
                                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                                    <div className="bg-gradient-dark shadow-dark border-radius-lg py-3 pe-1">
                                        <img src="../assets/img/players/sandro.png" alt="profile_image"
                                             className="w-100 border-radius-lg shadow-sm"/>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h6 className="mb-0 ">Player Name</h6>
                                    <p className="text-sm ">Position</p>
                                    <p className="text-sm ">Age</p>
                                    <p className="text-sm ">Nationality</p>
                                    <hr className="dark horizontal"/>
                                    <div className="d-flex ">
                                        <p className="mb-0 text-sm">
                                            <a href={'/player'} className="btn btn-sm btn-primary">View Player</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-4 mb-4">
                            <div className="card z-index-2 ">
                                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                                    <div className="bg-gradient-dark shadow-dark border-radius-lg py-3 pe-1">
                                        <img src="../assets/img/players/luke.png" alt="profile_image"
                                             className="w-100 border-radius-lg shadow-sm"/>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h6 className="mb-0 ">Player Name</h6>
                                    <p className="text-sm ">Position</p>
                                    <p className="text-sm ">Age</p>
                                    <p className="text-sm ">Nationality</p>
                                    <hr className="dark horizontal"/>
                                    <div className="d-flex ">
                                        <p className="mb-0 text-sm">
                                            <a href={'/player'} className="btn btn-sm btn-primary">View Player</a></p>
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

export default Dash;
