import React from "react";
import { Link } from "react-router-dom";


export default function BaseApp({children}){
    return(
        <div className="baseContainer">
            <div className="sideBar">
                <div className="sideBarContent">
                    <ul className="nav-menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/book">Books</Link></li>
                        <li><Link to="/book/add">Add</Link></li>
                    </ul>
                </div>
            </div>
            <div className="main">
                <div className="header">
                    <h1>Library Management</h1>
                </div>
                <div className="content">
                    <div className="content-div">
                       {children}
                    </div>
                
                </div>
                
            </div>
        </div>
    )
}