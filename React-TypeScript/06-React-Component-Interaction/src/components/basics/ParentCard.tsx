import React, { useState } from 'react';
import ChildCard from './ChildCard';

const ParentCard:React.FC = () => {

    const [parentText, setParentText] = useState<string>("I am from parent");
    const [fromChild, setFromChild] = useState<string>("");

    const findData = (value:string):void => {
        setFromChild(value);
    };

  return (
    <>
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-4 col-sm-8">
                    <div className="card">
                        <div className="card-body bg-danger text-white">
                            <pre>Parent Card</pre>
                            <pre>From Child : {fromChild}</pre>
                            <ChildCard parentText = {parentText} findData={findData}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </>
  );
}

export default ParentCard;