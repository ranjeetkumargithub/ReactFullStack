import React, { useState } from 'react';
import { IWatch } from '../models/Models';
import { WatchService } from '../services/WatchService';

const ProductDisplay:React.FC = () => {

    const [products, getProducts] = useState<IWatch[]>(WatchService.getAllWatches());

  return (
    <>
        <div className="container mt-3">
            <div className="row">
                <div className="col">
                    <p className="h3">Product</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et debitis a aut repudiandae quis deleniti, ratione quibusdam. Excepturi nam ut sint exercitationem molestias sapiente aspernatur nihil, libero optio, ex velit!</p>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                {
                    products.length > 0 && products.map(product => {
                        return(
                            <div className="col-md-3 col-sm-4 mt-3" key={product.id}>
                                <div className="card">
                                    <img src={product.imageUrl} alt="" width={150} height={150} />
                                    <div className="card-body">
                                        <p className="h5">Name : {product.name}</p>
                                        <p>Price : &#8377; {product.price.toFixed(2)}</p>
                                        {
                                            product.qty === 0 && <h5 className='text-danger'>Out-of-Stock</h5>
                                        }
                                        {
                                            product.qty > 0 && product.qty <= 10 && <h5 className='text-warning'>Running Out</h5>
                                        }
                                        {
                                            product.qty > 10 && <h5 className='text-success'>Available</h5>
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        
    </>
  );
}

export default ProductDisplay;