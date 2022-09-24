import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navigation(){
    let [links, setLinks] = useState([
        {dist: "/", title: "Home"},
        {dist: "/products", title: "Products"},
        {dist: "/favorites", title: "Favorites"}
    ])

    return(<div className="container-fluid bg-dark">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand text-warning" href="#">eShop</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {links.map(item=>{
                  return(<li className="nav-item">
                  <Link className="nav-link" to={item.dist}>
                    {item.title}
                  </Link>
                </li>)
            })}
          </ul>
        </div>
      </nav>
    </div>)
}