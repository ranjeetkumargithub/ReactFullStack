import React from "react";
import "./MyCard.css";

const MyCard = (props) => {
    return(
        <>
            <div className={`card card-body m-3 shadow-lg text-white ${props.bgColor}`}>
                <h2>{props.heading}</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo consequatur assumenda saepe eius expedita aspernatur facilis eum eligendi sint voluptatibus beatae cumque itaque perferendis repellendus ratione repellat cupiditate provident, porro similique distinctio amet voluptate in. Adipisci facere exercitationem rem optio.</p>
            </div>
        </>
    )
};
export default MyCard;