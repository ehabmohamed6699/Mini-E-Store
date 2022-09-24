import axios from "axios";
import { useEffect, useState } from "react";

export default function ProdDetails(props){
    let prodID = props.match.params.id;
    let rating = 0;
    let [prod, setProd] = useState([]);
    useEffect(() => {
        axios
          .get(
            `https://fakestoreapi.com/products/${prodID}`
          )
          .then((response) => {
            setProd(response.data);
          })
          .catch((err) => {
            console.log(err);
          });


      }, []);
      
      function viewRate(product){
        let counter = 0;
        let rateVal = Math.round(product);
        let rateBar = [];
        for(let i = 0; i < 5; i++){
            if(counter < rateVal){
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
  

      return (<div className="container-fluid bg-warning d-flex align-items-center justify-content-center py-5">
        <div className="prod-description bg-light d-flex flex-column flex-md-row align-items-center justify-content-between p-3 rounded-2">
            <img src={prod.image} style={{width:"350px"}}/>
            <div className="card-body">
                        <p className="card-title display-6" style={{width:"500px"}}>{prod.title}</p>
                        <p className="card-text" style={{width:"500px"}}>Description: {prod.description}</p>
                        <div className="d-flex text-warning">
                            
                            {viewRate(3.5)}
                        </div>
                        <p className="card-text">{prod.price}$</p>
                    </div>
        </div>
      </div>)
}