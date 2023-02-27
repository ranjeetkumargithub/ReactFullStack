import React, { useState } from 'react';

interface IProps{
    parentText : string;
    findData : (value:string) => void
}

const ChildCard:React.FC<IProps> = (props) => {

    const [childText, setChildText] = useState<string>("I am from Child");

    const clickButton = () => {
        props.findData(childText);
    };

  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body bg-primary">
                            <pre>Child Card</pre>
                            <pre>From Parent : {props.parentText}</pre>
                            <button className='btn btn-dark' onClick={clickButton}>click me</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </>
  );
}

export default ChildCard;