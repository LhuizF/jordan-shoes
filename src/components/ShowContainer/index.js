import React from "react";
import './style.scss'

import data from '../../mock/data.json'

export default function ShowContainer(){

    const { sneakers } = data;

    return(
        <div className="container">
            {sneakers.map((sneaker, i) =>(
                <div className="sneakers" key={i}>
                    <img src={sneaker.img} alt="" />
                    <p>{sneaker.color}</p>
                </div>
            ))}
        </div>
    )
}
