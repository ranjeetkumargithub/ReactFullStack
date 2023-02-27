import React from "react";
interface IProps{
    heading : string;
}

const Navbar:React.FC<IProps> = (props) => {
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