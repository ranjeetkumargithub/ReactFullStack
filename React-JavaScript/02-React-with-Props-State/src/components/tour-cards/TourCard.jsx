import React from "react";
import TourImg from "./TourImg";

const TourCard = (props) => {

    return(
        <>
            <div className="col-md-3">
                <div className="card">
                    <TourImg src={props.imageUrl}/>
                    <div className="card-body">
                        <p className="h4">{props.heading}</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, voluptas vero repellat quia labore asperiores!</p>
                        <button className="btn btn-success">Book Now</button>
                    </div>
                </div>
            </div>
        </>
    )
};
export default TourCard;