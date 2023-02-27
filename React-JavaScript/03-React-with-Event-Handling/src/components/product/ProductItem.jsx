
import React, { useState } from "react";

const ProductItem = (props) => {

    let [product, setProduct] = useState({
        sno : "AA001",
        name : "Onions",
        imageUrl : "https://www.bigbasket.com/media/uploads/p/xxl/10000150-3_4-fresho-onion.jpg",
        price : 45,
        qty : 1
    });

    const incrQty = () => {
        setProduct({
            ...product,
            qty : product.qty + 1
        })
    };

    const decrQty = () => {
        setProduct({
            ...product,
            qty : product.qty - 1 > 0 ? product.qty - 1 : 1
        })
    };

    return(
        <>
            <pre>{JSON.stringify(product)}</pre>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-sm-8 col-md-6 col-lg-3">
                        <div className="card shadow-lg">
                            <img src={product.imageUrl} alt="" className="img-fluid"/>
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">Name : <span className="fw-bold">{product.name}</span></li>
                                    <li className="list-group-item">Price : <span className="fw-bold">{product.price}</span></li>
                                    <li className="list-group-item">Qty : <span className="fw-bold">{product.qty}</span>
                                        <i className="bi bi-dash-circle ms-5 me-2 text-danger" onClick={decrQty}></i>
                                        <i className="bi bi-plus-circle text-success" onClick={incrQty}></i>
                                    </li>
                                    <li className="list-group-item">Total : <span className="fw-bold">{product.price * product.qty}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default ProductItem;