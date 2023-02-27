import React, { useState } from "react";
import cardImg1 from "../../assets/img/card_1.jpg";
import cardImg2 from "../../assets/img/card_2.jpg";
import cardImg3 from "../../assets/img/card_3.jpg";
import cardImg4 from "../../assets/img/card_4.jpg";
import TourCard from "./TourCard";
import TourHeading from "./TourHeading";

const TourCards = (props) => {

    let [msg, setMsg] = useState("Tour Cards");

    let [cards, setCards] = useState([
        {
            sno : "AA001",
            imageUrl : cardImg1,
            heading : "Paris"
        },
        {
            sno : "AA002",
            imageUrl : cardImg2,
            heading : "Bangkok"
        },
        {
            sno : "AA003",
            imageUrl : cardImg3,
            heading : "Indonesia"
        },
        {
            sno : "AA004",
            imageUrl : cardImg4,
            heading : "Malaysia"
        }
    ]);

    return(
        <>
            <TourHeading heading={msg}/>

            <div className="container">
                <div className="row">
                    {
                        cards.map((card, index) => {
                            return(
                                <TourCard key={index} imageUrl={card.imageUrl} heading={card.heading}/>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
};
export default TourCards;