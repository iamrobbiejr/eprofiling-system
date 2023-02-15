import React from 'react';

function NavBar(props) {

    return (
        <>
            {/*Navbar*/}
            <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
                 id="navbarBlur" data-scroll="true">
                <div className="container-fluid py-1 px-3">
                    <nav aria-label="breadcrumb">
                        <h6 className="font-weight-bolder mb-0"></h6>
                    </nav>
                    <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                        <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                            <div className="input-group input-group-outline">
                                {/*<label className="form-label">Type here...</label>*/}
                                {/*<input type="text" className="form-control" />*/}
                            </div>
                        </div>
                        <ul className="navbar-nav  justify-content-end">

                            <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                                <a href="javascript:" className="nav-link text-body p-0" id="iconNavbarSidenav">
                                    <div className="sidenav-toggler-inner">
                                        <i className="sidenav-toggler-line"></i>
                                        <i className="sidenav-toggler-line"></i>
                                        <i className="sidenav-toggler-line"></i>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item px-3 d-flex align-items-center">
                                <a href="javascript:" className="nav-link text-body p-0">
                                    {/*<i className="fa fa-envelope cursor-pointer"></i>*/}
                                </a>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <a href={'#'}
                                   className="nav-link text-body font-weight-bold px-0">
                                    <i className="fa fa-arrow-right me-sm-1"></i>
                                    <span className="d-sm-inline d-none"> Logout</span>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            {/*End Navbar*/}
        </>
    );
}

export default NavBar;
