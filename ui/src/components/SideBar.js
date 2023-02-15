import React from 'react';

function SideBar(props) {
    return (
        <>
            <aside
                className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark"
                id="sidenav-main">
                <div className="sidenav-header">
                    <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
                       aria-hidden="true" id="iconSidenav"></i>
                    <a className="navbar-brand m-0"
                       href={'#'}>
                        <img src="../assets/img/logo-ct.png" className="navbar-brand-img h-100" alt="main_logo"/>
                        <span className="ms-1 font-weight-bold text-white">EProfiling System</span>
                    </a>
                </div>
                <hr className="horizontal light mt-0 mb-2"/>
                <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-white active bg-gradient-primary"
                               href={'/'}>
                                <div
                                    className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10">dashboard</i>
                                </div>
                                <span className="nav-link-text ms-1">Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white " href={'/players'}>
                                <div
                                    className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10">group</i>
                                </div>
                                <span className="nav-link-text ms-1">Players</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white " href="../pages/notifications.html">
                                <div
                                    className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10">notifications</i>
                                </div>
                                <span className="nav-link-text ms-1">ChatRoom</span>
                            </a>
                        </li>

                    </ul>
                </div>
                <div className="sidenav-footer position-absolute w-100 bottom-0 ">

                </div>
            </aside>
        </>
    );
}

export default SideBar;
