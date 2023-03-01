import React from 'react';

interface IProps{
    heading : string;
    color : string;
}

const LayoutHeading:React.FC<IProps> = (props) => {
    const {heading, color} = props;
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className={`h3 ${color}`}>{heading}</p>
                        <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aspernatur aut cumque dolore doloremque dolorum earum eligendi error ex impedit ipsa itaque magni maiores maxime molestias mollitia nihil nobis non officia placeat quae, quasi reprehenderit sed sequi sint, vero.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default LayoutHeading;
