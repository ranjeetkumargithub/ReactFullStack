import React from "react";
import "./MyCard.css";

const MyCard = () => {
    return(
        <>
            <div className="card card-body m-3 shadow-lg">
                <h2>My Card</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo consequatur assumenda saepe eius expedita aspernatur facilis eum eligendi sint voluptatibus beatae cumque itaque perferendis repellendus ratione repellat cupiditate provident, porro similique distinctio amet voluptate in. Adipisci facere exercitationem rem optio.</p>
            </div>
            <button className="btn btn-success">
                <i className="bi bi-facebook"></i> Hello</button>
        </>
    )
};
export default MyCard;