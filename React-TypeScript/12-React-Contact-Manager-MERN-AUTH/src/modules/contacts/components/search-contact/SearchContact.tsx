import React, {SetStateAction} from 'react';
import {Link} from "react-router-dom";

interface IProps{
    searchQuery : string;
    filterTheContacts : (event:React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchContact:React.FC<IProps> = (props) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <form>
                            <div className="row">
                                <div className="col">
                                    <input
                                        value={props.searchQuery}
                                        onChange={e => props.filterTheContacts(e)}
                                        type="text" className="form-control" placeholder={'Search Here'}/>
                                </div>
                                <div className="col">
                                    <input type="submit" className="btn btn-dark" value={'Search'}/>
                                    <Link to={'/contacts/add'} className="btn btn-success ms-2">
                                        <i className='bi bi-plus-circle-fill'></i> Add New</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SearchContact;
