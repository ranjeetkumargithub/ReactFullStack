
import React, {useState} from 'react';
import {IWatch} from "../models/IWatch";
import {WatchService} from "../services/WatchService";

const WatchCart:React.FC = () => {

    const [watches, setWatches] = useState<IWatch[]>(WatchService.getAllWatches());

    const incrQty = (sno:string):void => {
        const filteredWatches:IWatch[] = watches.map((watch) => {
            if (watch.id === sno) {
                return {
                    ...watch,
                    qty: watch.qty + 1
                }
            }
            return watch;
        });
        setWatches(filteredWatches); // set back to state
    };

    const decrQty = (sno:string):void => {
        const filteredWatches:IWatch[] = watches.map((watch) => {
            if (watch.id === sno) {
                return {
                    ...watch,
                    qty: watch.qty - 1 > 0 ? watch.qty - 1 : 1
                }
            }
            return watch;
        });
        setWatches(filteredWatches); // set back to state
    };

    const grandTotal = ():number => {
        let total:number = 0;
        for (let watch of watches) {
            total += watch.price * watch.qty;
        }
        return total;
    };

    const clickDeleteWatch = (sno:string):void => {
        const remainingWatches:IWatch[] = watches.filter(watch => watch.id !== sno);
        setWatches(remainingWatches);
    };

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3">Watch Cart</p>
                        <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur,
                            consequatur cupiditate delectus exercitationem facilis itaque laborum natus possimus
                            provident quaerat quas quia quos ratione reprehenderit rerum sapiente similique voluptate
                            voluptatem.</p>
                    </div>
                </div>
            </div>
            <div className="container mt-3">
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
                                            return (
                                                <tr key={watch.id}>
                                                    <td>{watch.id}</td>
                                                    <td>
                                                        <img src={watch.imageUrl} alt="" width={50} height={50}/>
                                                    </td>
                                                    <td>{watch.name}</td>
                                                    <td>&#8377;{watch.price.toFixed(2)}</td>
                                                    <td>
                                                        <i onClick={() => decrQty(watch.id)}
                                                           className="bi bi-dash-circle-fill text-success me-2"></i>
                                                        {watch.qty}
                                                        <i onClick={() => incrQty(watch.id)}
                                                           className="bi bi-plus-circle-fill text-success ms-2"></i>
                                                    </td>
                                                    <td>&#8377;{(watch.price * watch.qty).toFixed(2)}</td>
                                                    <td>
                                                        <button className="btn btn-danger"
                                                                onClick={() => clickDeleteWatch(watch.id)}>
                                                            <i className="bi bi-trash"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                    <tr>
                                        <td colSpan={4}></td>
                                        <td>Grand Total :</td>
                                        <td>&#8377;<span className="fw-bold">{grandTotal().toFixed(2)}</span></td>
                                        <td></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </> : <>
                                <div className="row">
                                    <div className="col">
                                        <p className="h5 text-warning">----------- no records found --------</p>
                                    </div>
                                </div>
                            </>
                        }

                    </div>
                </div>
            </div>
        </>
    );
}
export default WatchCart;
