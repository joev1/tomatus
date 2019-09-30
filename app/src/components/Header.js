import React from 'react';

function Header() {
    return (
        <div className="page-main-header">
            <div className="header-container">
                <a href="/" className="logo"><img src={require("../img/logo.png")} alt="Tomatus"/></a>
                <ul className="nav-menu">
                    <li className="ham"><a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                             fill="none" stroke="#b0cad1">
                            <line x1="21" y1="10" x2="3" y2="10"></line>
                            <line x1="21" y1="18" x2="3" y2="18"></line>
                            <line x1="21" y1="6" x2="3" y2="6"></line>
                            <line x1="21" y1="14" x2="3" y2="14"></line>
                            <line x1="21" y1="22" x2="3" y2="22"></line>
                        </svg>
                    </a></li>
                    <li className="search">
                        <label>
                            <input className="form-control-plaintext " type="search" placeholder="Search.."></input>
                        </label>
                    </li>
                </ul>
                <ul className="nav-menu-right">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="#f75757">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                    </li>
                    <li><span className="dot"></span></li>
                    <li>Profile</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
