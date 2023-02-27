import React from 'react';
import ComponentC from './ComponentC';
import { AppInfo } from './models/AppInfo';

interface IProps{
    appInfo : AppInfo;
}

const ComponentB:React.FC<IProps> = (props) => {
  return (
    <>
        <div className="card">
            <div className="card-body bg-danger">
                <pre>Component B</pre>
                <pre>{JSON.stringify(props.appInfo)}</pre>
                <ComponentC appInfo={props.appInfo}/>
            </div>
        </div>
    </>
  );
}

export default ComponentB;