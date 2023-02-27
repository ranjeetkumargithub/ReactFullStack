import React from 'react';
import { AppInfo } from './models/AppInfo';

interface IProps{
    appInfo : AppInfo;
}

const ComponentC:React.FC<IProps> = (props) => {
  return (
    <>
        <div className="card">
            <div className="card-body bg-success">
                <pre>Component C</pre>
                <pre>{JSON.stringify(props.appInfo)}</pre>
            </div>
        </div>
    </>
  );
}

export default ComponentC;