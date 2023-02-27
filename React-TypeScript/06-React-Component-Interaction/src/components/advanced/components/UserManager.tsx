import React, { useState } from 'react';
import { IUser } from '../models/IUser';
import UserCard from './UserCard';
import UserTable from './UserTable';

const UserManager:React.FC = () => {

    const [user, setUser] = useState<IUser>({} as IUser);

    const receiveUser = (user:IUser):void => {
        setUser(user);
    };

  return (
    <>
        {/* <pre>{JSON.stringify(user)}</pre> */}
        <div className="container mt-3">
            <div className="row">
                <div className="col">
                    <p className="h3 text-warning">User Manager</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae error suscipit mollitia cumque reprehenderit aut dolorem at odit rem quia et inventore, dolor voluptatem ea vero eos, accusamus aliquam tempora?</p>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <UserTable sendUser={receiveUser}/>
                </div>
                <div className="col-md-3">
                    <UserCard user={user}/>
                </div>
            </div>
        </div>
      
    </>
  );
}

export default UserManager;