import React from "react";


export default function BaseApp({children}){
    return(
        <div className="baseContainer">
            <div className="sideBar">
                <div className="sideBarContent">
                    <ul className="nav-menu">
                        <li><a href="/">Home</a></li>
                        <li><a href="/book">Books</a></li>
                        <li><a href="/book/add">Add</a></li>
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