import React, { useState } from 'react';

const UsernameChange:React.FC = () => {

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const updateUsername = (event:React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const updatePassword = (event:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

  return (
    <>
        <pre>{JSON.stringify({username, password})}</pre>
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-4 col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <form>
                                <div className='mb-2'>
                                    <input
                                        value={username}
                                        onChange={e => updateUsername(e)}
                                        type="text" className='form-control' placeholder='username'/>
                                </div>
                                <div className='mb-2'>
                                    <input
                                        value={password}
                                        onChange={e => updatePassword(e)}
                                        type="password" className='form-control' placeholder='password'/>
                                </div>
                            </form>
                            <h3>Username: {username}</h3>
                            <h3>Password: {password}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </>
  );
}

export default UsernameChange;