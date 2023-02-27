import React, { useContext } from 'react';
import { AppInfoContext } from '../../context/AppInfoContext';
import ComponentThree from './ComponentThree';

const ComponentTwo:React.FC = () => {

    const appInfo = useContext(AppInfoContext)

  return (
    <>
        <div className="card">
            <div className="card-body bg-danger">
                <pre>Component Two</pre>
                <pre>{JSON.stringify(appInfo)}</pre>
                <ComponentThree/>
            </div>
        </div>
    </>
  );
}

export default ComponentTwo;