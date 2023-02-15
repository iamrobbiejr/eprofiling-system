import React from 'react';
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const Players = (props) => {
    return (
        <div>
            <SideBar/>
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                <NavBar/>
                <div className="container-fluid py-4">
                    <div className="row mt-4">
                        <div className="row">
                            <div className="col-12">
                                <div className="card my-4">
                                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                        <div className="bg-gradient-dark shadow-dark border-radius-lg pt-4 pb-3">
                                            <h6 className="text-white text-capitalize ps-3">All Players</h6>
                                        </div>
                                        <div className="flex right-0 mt-2">
                                            <button className="btn btn-sm btn-primary">
                                                <i className="fa fa-user-plus"></i> Add Player
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body px-0 pb-2">
                                        <div className="table-responsive p-0">
                                            <table className="table align-items-center mb-0">
                                                <thead>
                                                <tr>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Player</th>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Position</th>
                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Age</th>
                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Joined</th>
                                                    <th className="text-secondary opacity-7"></th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex px-2 py-1">
                                                            <div>
                                                                <img src="../assets/img/team-2.jpg"
                                                                     className="avatar avatar-sm me-3 border-radius-lg"
                                                                     alt="user1"/>
                                                            </div>
                                                            <div className="d-flex flex-column justify-content-center">
                                                                <h6 className="mb-0 text-sm">John Michael</h6>
                                                                <p className="text-xs text-secondary mb-0">john@creative-tim.com</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className="text-xs font-weight-bold mb-0">Manager</p>
                                                        <p className="text-xs text-secondary mb-0">Organization</p>
                                                    </td>
                                                    <td className="align-middle text-center text-sm">
                                                         <span
                                                             className="badge badge-sm bg-gradient-secondary">20</span>
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <span
                                                            className="text-secondary text-xs font-weight-bold">23/04/18</span>
                                                    </td>
                                                    <td className="align-middle">
                                                        <a href={'#'}
                                                           className="text-success font-weight-bold text-xs"
                                                           data-toggle="tooltip" data-original-title="Edit user">
                                                            <i className="fa fa-edit"></i> Edit
                                                        </a>&nbsp;|&nbsp;
                                                        <a href={'#'}
                                                           className="text-danger font-weight-bold text-xs"
                                                           data-toggle="tooltip" data-original-title="Edit user">
                                                            <i className="fa fa-trash"></i> Delete
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex px-2 py-1">
                                                            <div>
                                                                <img src="../assets/img/team-3.jpg"
                                                                     className="avatar avatar-sm me-3 border-radius-lg"
                                                                     alt="user2"/>
                                                            </div>
                                                            <div className="d-flex flex-column justify-content-center">
                                                                <h6 className="mb-0 text-sm">Alexa Liras</h6>
                                                                <p className="text-xs text-secondary mb-0">alexa@creative-tim.com</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className="text-xs font-weight-bold mb-0">Programator</p>
                                                        <p className="text-xs text-secondary mb-0">Developer</p>
                                                    </td>
                                                    <td className="align-middle text-center text-sm">
                                                        <span
                                                            className="badge badge-sm bg-gradient-secondary">25</span>
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <span
                                                            className="text-secondary text-xs font-weight-bold">11/01/19</span>
                                                    </td>
                                                    <td className="align-middle">
                                                        <a href={'#'}
                                                           className="text-success font-weight-bold text-xs"
                                                           data-toggle="tooltip" data-original-title="Edit user">
                                                            <i className="fa fa-edit"></i> Edit
                                                        </a>&nbsp;|&nbsp;
                                                        <a href={'#'}
                                                           className="text-danger font-weight-bold text-xs"
                                                           data-toggle="tooltip" data-original-title="Edit user">
                                                            <i className="fa fa-trash"></i> Delete
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex px-2 py-1">
                                                            <div>
                                                                <img src="../assets/img/team-4.jpg"
                                                                     className="avatar avatar-sm me-3 border-radius-lg"
                                                                     alt="user3"/>
                                                            </div>
                                                            <div className="d-flex flex-column justify-content-center">
                                                                <h6 className="mb-0 text-sm">Laurent Perrier</h6>
                                                                <p className="text-xs text-secondary mb-0">laurent@creative-tim.com</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className="text-xs font-weight-bold mb-0">Executive</p>
                                                        <p className="text-xs text-secondary mb-0">Projects</p>
                                                    </td>
                                                    <td className="align-middle text-center text-sm">
                                                       <span
                                                           className="badge badge-sm bg-gradient-secondary">27</span>
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <span
                                                            className="text-secondary text-xs font-weight-bold">19/09/17</span>
                                                    </td>
                                                    <td className="align-middle">
                                                        <a href={'#'}
                                                           className="text-success font-weight-bold text-xs"
                                                           data-toggle="tooltip" data-original-title="Edit user">
                                                            <i className="fa fa-edit"></i> Edit
                                                        </a>&nbsp;|&nbsp;
                                                        <a href={'#'}
                                                           className="text-danger font-weight-bold text-xs"
                                                           data-toggle="tooltip" data-original-title="Edit user">
                                                            <i className="fa fa-trash"></i> Delete
                                                        </a>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
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

export default Players;
