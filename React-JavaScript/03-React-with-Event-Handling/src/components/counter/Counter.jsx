import React, { useState } from "react";

const Counter = (props) => {

    let [count, setCount] = useState(0);

    const incrCounter = () => {
        setCount(count + 1);
        // setCount((prevState) => {
        //     return prevState + 1;
        // });
    };

    const incrCounterBy = (value) => {
        setCount(count + value);
        /*setCount((prevState) => {
            return prevState + value;
        });*/
    };

    const decrCounter = () => {
        setCount(count - 1 > 0 ? count - 1 : 0);
        /*setCount((prevState) => {
            if(prevState - 1 > 0){
                return prevState - 1;
            }
            else{
                return 0;
            }
        });*/
    };

    const decrCounterBy = (value) => {
        setCount(count - value > 0 ? count - value : 0);
        /*setCount((prevState) => {
            if(prevState - value > 0){
                return prevState - value;
            }
            else{
                return 0;
            }
        });*/
    };

    return(
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-sm-8 col-md-6 col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <p className="display-3">{count}</p>
                                <button className="btn btn-success me-2" onClick={incrCounter}>Increament</button>
                                <button className="btn btn-warning" onClick={decrCounter}>Decreament</button>
                                <hr />
                                <button className="btn btn-success me-2" onClick={() => incrCounterBy(5)}>IncreamentBy</button>
                                <button className="btn btn-warning" onClick={() => decrCounterBy(5)}>DecreamentBy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Counter;