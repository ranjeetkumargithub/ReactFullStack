
import React, { useState } from "react";
import * as ProductService from "./service/ProductService";

const ProductCart = (props) => {

    let [watches, setWatches] = useState(ProductService.getAllProducts());

    const incrQty = (sno) => {
        const filteredWatches = watches.map((watch) => {
            if(watch.id === sno){
                return {
                    ...watch,
                    qty: watch.qty + 1
                }
            }
            return watch;
        });
        setWatches(filteredWatches);  //set back to state
    };

    const decrQty = (sno) => {
        const filteredWatches = watches.map((watch) => {
            if(watch.id === sno){
                return {
                    ...watch,
                    qty: watch.qty - 1 > 0 ? watch.qty - 1 : 1
                }
            }
            return watch;
        });
        setWatches(filteredWatches);  //set back to state
    };

    const grandTotal = () => {
        let total = 0;
        for(let watch of watches){
            total += watch.price * watch.qty;
        }
        return total;
    };

    const clickDeleteWatch = (sno) => {
        const remainingWatches = watches.filter(watch => watch.id !== sno);
        setWatches(remainingWatches);
    };

    return(
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3">Watch Cart</p>
                        <p className="fst-italic">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            At ipsa nemo eum aspernatur deleniti necessitatibus, ea nihil aut dolor? 
                            Facilis maiores officia eius deleniti error, saepe praesentium 
                            dolorum obcaecati? Rem.</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        {
                            watches.length > 0 ? <>
                                <table className="table table-striped text-center">
                                    <thead className="bg-success text-white">
                                        <th>SNO</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Total</th>
                                        <th>Action</th>
                                    </thead>
                                    <tbody>
                                        {
                                            watches.map((watch) => {
                                                return(
                                                    <tr key={watch.id}>
                                                        <td>{watch.id}</td>
                                                        <td>
                                                            <img src={watch.imageUrl} alt="" width={30} height={30}/>
                                                        </td>
                                                        <td>{watch.name}</td>
                                                        <td>&#8377;{watch.price.toFixed(2)}</td>
                                                        <td>
                                                            <i className="bi bi-dash-circle-fill text-success me-2" onClick={() => decrQty(watch.id)}></i>
                                                            {watch.qty}
                                                            <i className="bi bi-plus-circle-fill text-success ms-2" onClick={() => incrQty(watch.id)}></i>
                                                        </td>
                                                        <td>&#8377;{(watch.price * watch.qty).toFixed(2)}</td>
                                                        <td>
                                                            <button className="btn btn-danger" onClick={() => clickDeleteWatch(watch.id)}>
                                                                <i className="bi bi-trash"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                        <tr>
                                            <td colSpan={4}></td>
                                            <td>Grand Total</td>
                                            <td>&#8377;<span className="fw-bold">{grandTotal().toFixed(2)}</span></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </> : <>
                                <div className="row">
                                    <div className="col">
                                        <p className="h5 text-warning">------------- no record found -------------</p>
                                    </div>
                                </div>
                            </>
                        }
                        
                    </div>
                </div>
            </div>
        </>
    )
};
export default ProductCart;