import React from 'react';
import { IUser } from '../models/IUser';

interface IProps{
    user : IUser;
}

const UserCard:React.FC<IProps> = (props) => {

  const {user} = props;  // de-structure user ==> props.user = user

  return (
    <>
        {
            user && Object.keys(user).length > 0 &&
            <div className='card shadow-lg sticky-top'>
              <div className='card-header text-center bg-warning'>
                <img src={user.picture.large} alt="" className='rounded-circle'/>
              </div>
              <div className="card-body bg-warning">
                <ul className='list-group'>
                  <li className='list-group-item'>
                    Name : {user.name.first} {user.name.last}
                  </li>
                  <li className='list-group-item'>
                    Email : {user.email}
                  </li>
                  <li className='list-group-item'>
                    Mobile : {user.phone}
                  </li>
                  <li className='list-group-item'>
                    Age : {user.dob.age} yrs
                  </li>
                  <li className='list-group-item'>
                    State : {user.location.state} 
                  </li>
                  <li className='list-group-item'>
                    Country : {user.location.country}
                  </li>
                </ul>
              </div>
            </div> 
        }
    </>
  );
}

export default UserCard;