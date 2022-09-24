import axios from "axios";
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFavorite } from "../../store/action";

export default function Products(){


    let [prodData, setProdData] = useState([])
    let shouldLog = useRef(true)
    const dispatch=useDispatch()
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then(response => {
            if (shouldLog.current){
                setProdData([...response.data])
                // console.log(prodData);
                shouldLog.current = false;
            }
        }).catch(err => console.log(err));
        
    }, []);

    function viewRate(product){
        let counter = 0;
        let rate = Math.round(product.rating.rate);
        let rateBar = [];
        for(let i = 0; i < 5; i++){
            if(counter <= rate){
                counter++;
                rateBar.push(1);
            } else{
                rateBar.push(0);
            }
        }
        return(rateBar.map(x=>{
            if(x==1){
                return(
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                )
            }
            return(
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                </svg>
            )
        }))
    }

    const displayProds = prodData.map(item => {
        return (
            <div className="col-12 col-md-6 col-lg-3 d-flex mb-4 justify-content-center">
                <div className="card" style={{width:'18rem'}}>
                    <img className="card-img-top" src={item.image} height="300"/>
                    <div className="card-body">
                        <h6 className="card-title" style={{height:'50px'}}>{(item.title.length > 52)?item.title.slice(0,45)+"...":item.title}</h6>
                        <div className="d-flex text-warning">
                            {viewRate(item)}
                        </div>
                        <p className="card-text">{item.price}$</p>
                        <div className="d-flex gap-4">
                            <Link to={`/products/${item.id}`} className="btn btn-warning">Show</Link>
                            <button  class="btn btn-danger" onClick={()=>dispatch(setFavorite(item))}>
                                Add to Favorites
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
    

    return(
        <div className="container shows d-flex flex-column align-items-center">
            <p className="display-4">Products</p>
            <div className="row" style={{width: '100%'}}>
                {
                    displayProds
                }
            </div>
        </div>
    )
}