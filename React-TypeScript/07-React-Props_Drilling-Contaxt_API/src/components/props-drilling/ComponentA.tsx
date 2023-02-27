import React from 'react';
import { json } from 'stream/consumers';
import ComponentB from './ComponentB';
import { AppInfo } from './models/AppInfo';

interface IProps{
    appInfo : AppInfo;
}

const ComponentA:React.FC<IProps> = (props) => {
  return (
    <>
        <div className="card">
            <div className="card-body bg-primary">
                <pre>Component A</pre>
                <pre>{JSON.stringify(props.appInfo)}</pre>
                <ComponentB appInfo={props.appInfo}/>
            </div>
        </div>
    </>
  );
}

export default ComponentA;