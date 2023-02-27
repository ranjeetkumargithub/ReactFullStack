import React, { useState } from 'react';

interface IUser{
    username : string;
    email : string;
    password : string;
    designation : string;
    gender : string;
    bio : string;
    terms : boolean;
}

const RegisterUser:React.FC = () => {

    const [user, setUser] = useState<IUser>({
        username : "",
        email : "",
        password : "",
        designation : "",
        gender : "",
        bio : "",
        terms : false
    });

    const updateInput = (event:React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> , key:string) => {
        setUser({
            ...user,
            [key] : event.target.value
        });
    };

    const updateCheck = (event:React.ChangeEvent<HTMLInputElement>, key:string) => {
        setUser({
            ...user,
            [key] : event.target.checked
        });
    };

    const checkEmptyFields = () => {
        for(let value of Object.values(user)){
            if(value === ""){
                return true;
            }
        }
        return false;
    };

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(user);
    };

  return (

    <>
        {/* <pre>{JSON.stringify(user)}</pre> */}
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-4 col-sm-8">
                    <div className="card shadow-lg">
                        <div className="card-header bg-warning">
                            <div className="h3">Registration</div>
                        </div>
                        <div className="card-body bg-light">
                            <form onSubmit={e => handleSubmit(e)}>
                                <div className="mb-2">
                                    <input type="text" className='form-control' placeholder='Username' 
                                        value={user.username} onChange={(e) => updateInput(e, "username")} />
                                </div>
                                <div className="mb-2">
                                    <input type="email" className='form-control' placeholder='Email' 
                                        value={user.email} onChange={e => updateInput(e, "email")} />
                                </div>
                                <div className="mb-2">
                                    <input type="password" className='form-control' placeholder='Password'
                                        value={user.password} onChange={e => updateInput(e, "password")} />
                                </div>
                                <div className="mb-2">
                                    <select className='form-control' value={user.designation} onChange={e => updateInput(e, "designation")}>
                                        <option value="">Select Designation</option>
                                        <option value="Software Engineering">Software Engineering</option>
                                        <option value="Sr.Software Engineering">Sr.Software Engineering</option>
                                        <option value="Tech Lead">Tech Lead</option>
                                        <option value="Manager">Manager</option>
                                    </select>
                                </div>
                                <div className="mb-2 form-check">
                                    <label className='form-check-label me-3'>Gender : </label>
                                    <input 
                                        onChange={e => updateInput(e, 'gender')}
                                        type="radio" className='form-check-inline me-2' name='gender' value={"Male"} />
                                        <label className='form-check-label me-3'>Male</label>
                                        <input 
                                            onChange={e => updateInput(e, 'gender')}
                                            type="radio" className='form-check-inline me-2' name='gender' value={"Female"} />
                                            <label className='form-check-label'>Female</label>
                                </div>
                                <div className="mb-2">
                                    <textarea 
                                        value={user.bio}
                                        onChange={e => updateInput(e, 'bio')}
                                        className='form-control' rows={3} placeholder="Bio"></textarea>
                                </div>
                                <div className="mb-2">
                                    <input  
                                        onChange={e => updateCheck(e, 'terms')}
                                        type="checkbox" className='form-check-input' />
                                    <label className='form-check-label'> Accepts Terms & Conditions</label>
                                </div>
                                <div className="mb-2">
                                    <input type="submit" value="Register" disabled={!user.terms || checkEmptyFields()} className='btn btn-warning' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </>
  );
}

export default RegisterUser;