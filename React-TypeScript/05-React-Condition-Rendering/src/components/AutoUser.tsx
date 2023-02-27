import React, { useState } from 'react';

const AutoUser:React.FC = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginUser, setLoginUser] = useState("Naveen");

    const login = () => {
        setIsLoggedIn(true);
    };

    const logOut = () => {
        setIsLoggedIn(false);
    };

    const displayWelcomeCard = (name:string) => {
        return(
            <div className="card bg-light">
                <div className="card-body">
                    <p className="h3 text-success">Hello! {name}</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste reprehenderit nostrum mollitia dicta, ipsa, optio in vel voluptate iusto non voluptas aspernatur necessitatibus velit itaque dolores incidunt ducimus laborum possimus.</p>
                </div>
            </div>
        )
    };

    const displayLogoutCard = (name:string) => {
        return(
            <div className="card bg-light">
                <div className="card-body">
                    <p className="h3 text-danger">GoodBye! {name}</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste reprehenderit nostrum mollitia dicta, ipsa, optio in vel voluptate iusto non voluptas aspernatur necessitatibus velit itaque dolores incidunt ducimus laborum possimus.</p>
                </div>
            </div>
        )
    };

  return (
    <>
        {/* <pre>{JSON.stringify(isLoggedIn)}</pre> */}
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-4 col-sm-6">
                    <div className="mb-2">
                        {
                            isLoggedIn ? 
                                <button className='btn btn-danger' onClick={logOut}>LogOut</button> : 
                                <button className='btn btn-success' onClick={login}>Login</button>
                        }  
                    </div>
                    {
                        (isLoggedIn) ? displayWelcomeCard(loginUser) : displayLogoutCard(loginUser)
                    }

                </div>
            </div>
        </div>
      
    </>
  );
}

export default AutoUser;