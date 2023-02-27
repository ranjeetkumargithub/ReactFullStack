import React from "react";

interface IProps{
    src : string;
}

const TourImg:React.FC<IProps> = (props) => {

    return(
        <>
            <img src={props.src} alt="" />
        </>
    )
};
export default TourImg;