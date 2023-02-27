import React, { useContext } from 'react';
import { AppInfoContext } from '../../context/AppInfoContext';
import ComponentTwo from './ComponentTwo';

const ComponentOne:React.FC = () => {

    const appInfo = useContext(AppInfoContext)

  return (
    <>
        <div className="card">
            <div className="card-body bg-primary">
                <pre>Component One</pre>
                <pre>{JSON.stringify(appInfo)}</pre>
                <ComponentTwo/>
            </div>
        </div>
    </>
  );
}

export default ComponentOne;