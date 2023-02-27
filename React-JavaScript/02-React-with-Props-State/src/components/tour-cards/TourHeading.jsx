import React from "react";

const TourHeading = (props) => {

    return(
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success">{props.heading}</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem esse mollitia cupiditate voluptatum quibusdam. Facere tempora unde atque fuga, similique sit, quae esse, quo dolor sed est aperiam. Ratione, sed cum omnis officia odio aspernatur ipsam exercitationem voluptas ipsa ipsum.</p>
                    </div>
                </div>
            </div>
        </>
    )
};
export default TourHeading;