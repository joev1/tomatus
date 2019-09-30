import React from 'react';
import ItemGrid from "./ItemGrid";

function Body() {
    return (
        <div className="wrapper">
            <div className="sidebar">
                <ul className="sidebar-menu">
                    <span className="span-text">Menu</span>
                    <li className=""><a className="sidebar-header " href="#">
                        <span id="span-active-temp">Menu Layout</span></a>
                        <ul className="sidebar-submenu ">
                            <li className=""><a href="#"><i className="fa fa-circle"></i>Menu Layout 1<i
                                className="fa fa-angle-right pull-right"></i></a></li>
                            <li className=""><a href="#"><i className="fa fa-circle"></i>Menu Layout 2<i
                                className="fa fa-angle-right pull-right"></i></a></li>
                            <li className=""><a href="#"><i className="fa fa-circle"></i>Menu Layout 3<i
                                className="fa fa-angle-right pull-right"></i></a></li>
                            <li className=""><a href="#"><i className="fa fa-circle"></i>Menu Layout 4<i
                                className="fa fa-angle-right pull-right"></i></a></li>

                        </ul>
                    </li>
                    <li className=""><a className="sidebar-header " href="#">
                        <span>Menu Layout</span></a>
                    </li>
                    <li className=""><a className="sidebar-header " href="#">
                        <span>Menu Layout</span></a>
                    </li>
                    <li className=""><a className="sidebar-header " href="#">
                        <span>Menu Layout</span></a>
                    </li>
                    <li className=""><a className="sidebar-header " href="#">
                        <span>Menu Layout</span></a>
                    </li>
                    <li className=""><a className="sidebar-header " href="#">
                        <span>Menu Layout</span></a>
                    </li>
                    <span className="span-text">Authentication pages</span>
                    <li className=""><a className="sidebar-header " href="#">
                        <span>Menu Layout</span></a>
                    </li>
                    <li className=""><a className="sidebar-header " href="#">
                        <span>Menu Layout</span></a>
                    </li>
                    <li className=""><a className="sidebar-header " href="#">
                        <span>Menu Layout</span></a>
                    </li>
                    <li className=""><a className="sidebar-header " href="#">
                        <span>Menu Layout</span></a>
                    </li>
                    <li className=""><a className="sidebar-header " href="#">
                        <span>Menu Layout</span></a>
                    </li>
                </ul>
            </div>
            <div className="page-body-wrapper">
                <div className="page-menu">
                    <div className="menu">
                        <span className="span-text">Menu layout 01</span>
                    </div>
                </div>
                <div className="page-body">
                    <div className="wrapper">
                        <div className="sidebar-sorting">
                        </div>
                        <div className="page-body-wrapper">
                            <div className="page-menu-mini">
                                <div className="menu">
                                    <span className="span-text">Menu layout 01</span>
                                </div>
                            </div>
                            <div className="page-body">
                                <div className="grid-container">
                                <ItemGrid/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body
