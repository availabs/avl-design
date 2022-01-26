import React from "react";
import get from 'lodash.get'

const PropsManager = ({ propsList }) => {
  return (
    <div>
      {propsList.map((p, i) => (
        <div key={i} className="flex flex-col px-8 border-b border-gray-300 hover:bg-blue-100">
          <div className="flex-1 flex items-end py-4">
            <div className="text-lg font-bold">{p.name}</div>
            <div className="text-sm font-medium text-gray-400 italic pl-2">{p.type}</div>
            <div className="text-sm font-medium text-gray-600 italic pl-2 flex-1 text-right">{p.required ? 'Required' : 'Optional'}</div>
          </div>
          <div>
            {get(p,'description', []).map(d => <p className='p-2'>{d}</p>)}
          </div>
          {/*<div className="h-96">
            <textarea
              value={JSON.stringify(p.default, null, 3)}
              onChange={() => {}}
              className="w-full h-full bg-gray-200 text-gray-600 text-xs p-2 font-thin leading-5"
            ></textarea>
          </div>*/}
        </div>
      ))}
    </div>
  );
};

export default PropsManager;
