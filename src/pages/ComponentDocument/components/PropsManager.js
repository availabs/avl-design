import React from "react";

const PropsManager = ({ propsList }) => {
  return (
    <div>
      <div className="text-2xl font-bold px-8">Props</div>
      {propsList.map((p) => (
        <div className="flex flex-col px-8 border-b border-gray-300 hover:bg-blue-100">
          <div className="flex-1">
            <div className="text-lg font-bold">{p.name}</div>
            <div className="font-medium text-gray-500">{p.type}</div>
          </div>
          <div className="h-96">
            <textarea
              value={JSON.stringify(p.default, null, 3)}
              className="w-full h-full bg-gray-200 text-gray-600 text-xs p-2 font-thin leading-5"
            ></textarea>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropsManager;
