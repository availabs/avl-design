import React from "react";
import { useTheme } from 'modules/avl-components/src'

const ThemeManager = ({ themeVar }) => {
  const theme = useTheme()
  if(!(themeVar && theme[themeVar])){
    return <div>No Theme Info {themeVar}</div>
  }
  return (
    <div className="py-4">
      <div className="text-2xl font-bold px-8">Theme Vars</div>
      <pre>
        {JSON.stringify(theme[themeVar]({}),null,3)}
      </pre>
    </div>
  );
};

export default ThemeManager;
