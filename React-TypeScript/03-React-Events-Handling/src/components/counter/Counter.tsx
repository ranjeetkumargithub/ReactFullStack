import React, { useState } from 'react';

const Counter:React.FC = () => {

    const [count, setCount] = useState<number>(0)

    const incr = ():void => {
        setCount(count + 1);
    };

    const decr = ():void => {
        setCount(count - 1 > 0 ? count - 1 : 0);
    };

    const incrBy = (value:number):void => {
        setCount(count + value);
    };

    const decrBy = (value:number):void => {
        setCount(count - value > 0 ? count - value : 0);
    };

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <p className='display-3'>{count}</p>
                                <button className='btn btn-success me-1' onClick={incr}>Increament</button>
                                <button className='btn btn-warning' onClick={decr}>Decreament</button>
                                <hr />
                                <button className='btn btn-success me-1' onClick={() => incrBy(5)}>Increament By</button>
                                <button className='btn btn-warning' onClick={() => decrBy(5)}>Decreament By</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Counter;