import React, { useState } from 'react';
import ComponentOne from './components/context-API/ComponentOne';
// import ComponentA from './components/props-drilling/ComponentA';
// import { AppInfo } from './components/props-drilling/models/AppInfo';
import { AppInfo } from './components/context-API/models/AppInfo';
import { IUser } from './components/context-API/models/IUser';
import { AppInfoContext } from './context/AppInfoContext';
import { UserInfoContext } from './context/UserInfoContext';
import Navbar from './layout/Navbar';

export interface UserFn{
  receiveUser : (user:IUser) => void
}


const App:React.FC = () => {

  const [appInfo, setAppInfo] = useState<AppInfo>({
    name : "React E-Commerce",
    version : "1.0.1",
    author : "Kelvin"
  });

  const [appUser, setAppUser] = useState<IUser>({} as IUser);

  const receiveUser = (user:IUser):void =>{
    setAppUser(user);
  };

  return (
      <>
        <Navbar heading={"React Props Drilling & Context API"}/>

        {/* Props Drilling */}
        {/* <div className="container mt-3 text-white">
          <div className="row">
            <div className="col-md-6 col-sm-10">
              <div className="card shadow-lg">
                <div className="card-body bg-dark">
                  <pre>App Component</pre>
                  <pre>{JSON.stringify(appInfo)}</pre>
                  <ComponentA appInfo={appInfo}/>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Context API */}
        <div className="container mt-3 text-white">
          <div className="row">
            <div className="col-md-6 col-sm-10">
              <div className="card shadow-lg">
                <div className="card-body bg-dark">
                  <pre>App Component</pre>
                  <pre>{JSON.stringify(appInfo)}</pre>
                  <pre>{JSON.stringify(appUser)}</pre>
                  <AppInfoContext.Provider value={appInfo}>
                    <UserInfoContext.Provider value={{receiveUser : receiveUser}}>
                      <ComponentOne/>
                    </UserInfoContext.Provider>
                  </AppInfoContext.Provider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    
  );
}

export default App;
