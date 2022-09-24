import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Favorites(){
    let favList=useSelector((state)=>state.favorties)

    const displayProds = favList.map(item => {
        return (
            <div className="col-12 col-md-6 col-lg-3 d-flex mb-4 justify-content-center">
                <div className="card" style={{width:'18rem'}}>
                    <img className="card-img-top" src={item.image} height="300"/>
                    <div className="card-body">
                        <h6 className="card-title" style={{height:'50px'}}>{(item.title.length > 52)?item.title.slice(0,45)+"...":item.title}</h6>
                        <p className="card-text">{item.price}$</p>
                        <Link to={`/products/${item.id}`} className="btn btn-warning">Show</Link>
                    </div>
                </div>
            </div>
        );
    });

    return (<div className="container shows d-flex flex-column align-items-center">
    <p className="display-4">Products</p>
    <div className="row" style={{width: '100%'}}>
        {
            displayProds
        }
    </div>
</div>)
}