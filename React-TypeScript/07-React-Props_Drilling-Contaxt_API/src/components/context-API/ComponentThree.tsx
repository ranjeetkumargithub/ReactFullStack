import React, { useContext, useState } from 'react';
import { AppInfoContext } from '../../context/AppInfoContext';
import { UserInfoContext } from '../../context/UserInfoContext';
import { IUser } from './models/IUser';

const ComponentThree:React.FC = () => {

    const [user, setUser] = useState<IUser>({
        name : "Rajan",
        designation : "Software engineer"
    });

    // consume the data
    const appInfo = useContext(AppInfoContext);
    const userObj = useContext(UserInfoContext);

    const clickButton =() => {
        userObj.receiveUser(user);
    };

  return (
    <>
        <div className="card">
            <div className="card-body bg-success">
                <pre>Component Three</pre>
                <pre>{JSON.stringify(appInfo)}</pre>
                <pre>{JSON.stringify(user)}</pre>
                <button className='btn btn-dark' onClick={clickButton}>Click Me</button>
            </div>
        </div>
    </>
  );
}

export default ComponentThree;