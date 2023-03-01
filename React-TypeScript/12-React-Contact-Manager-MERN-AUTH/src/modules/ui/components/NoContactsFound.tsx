import React from 'react';
import noImg from "../../../assets/img/noimg.png";

const Spinner: React.FC = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <img src={noImg} alt=""/>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Spinner;
