import React from 'react';
import "./Navbar.css";

import logo from "../../images/logo.png";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#serverless">Serverless</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Resources">Resources</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#docs">Docs</a>
                            </li>
                            <li className="nav-item ms-3">
                                <a className="nav-link button btn btn-info" href="#">Become a member?</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;