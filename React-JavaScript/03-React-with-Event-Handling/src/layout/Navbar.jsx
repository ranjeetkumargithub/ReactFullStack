import React from "react";

const Navbar = (props) => {
    return(
        <>
            <nav className="navbar navbar-dark bg-success">
                <div className="container">
                    <a href="https://reactjs.org/" className="navbar-brand">{props.heading}</a>
                </div>
            </nav>
        </>
    )
};
export default Navbar;