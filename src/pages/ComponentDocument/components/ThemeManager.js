import React from "react";
import { useTheme } from '@availabs/avl-components'

const ThemeManager = ({ themeVars }) => {
  const theme = useTheme()
  console.log('ThemeManager', theme)
  return (
    <div className="py-4">
      <div className="text-2xl font-bold px-8">Theme Vars</div>
      {Object.keys(themeVars).map((themeVar,i) => (
        <div key={i} className="flex flex px-8 border-b border-gray-300 hover:bg-blue-100">
          <div className="flex-1">
            <div className="text-lg font-bold text-gray-600">{themeVar}</div>
          </div>
          <div className="flex-1">
            <textarea
              value={themeVars[themeVar]}
              onChange={() => {}}
              className="bg-gray-200 text-gray-600 text-xs p-2 w-full"
            ></textarea>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThemeManager;
