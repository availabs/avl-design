import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "pages/Layout";
import get from "lodash.get";

//
import PropsManager from "./components/PropsManager";
import ThemeManager from "./components/ThemeManager";
import ResizableFrame from "./components/ResizableFrame";
// import get from 'lodash.get'

import { useTheme } from "modules/avl-components/src/";
import components from "components";
import examples from "pages/ExampleList/examples";

let compLib = components.reduce((lib, comp) => {
  lib[comp.name] = comp;
  return lib;
}, {});

examples.forEach((comp, i) => {
  compLib[comp.name] = comp;
});

const CompDoc = () => {
  const theme = useTheme();
  let { component } = useParams();
  const [Doc, setDoc] = useState(compLib[component].doc);

  //console.log("testing", Doc);

  const [compProps, setCompProps] = useState(
    get(Doc, "props", []).reduce((compProps, prop) => {
      compProps[prop.name] = prop.default;
      return compProps;
    }, {})
  );
  React.useEffect(() => {
    // console.log("location changed", component);
    setDoc(compLib[component].doc);
  }, [component]);

  const [themeVars, setThemeVars] = useState({
    ...get(Doc, "theme", []).reduce((themeVars, tvar) => {
      themeVars[tvar] = theme[tvar];
      return themeVars;
    }, {}),
    ...get(Doc, "dependencies", []).reduce((themeVars, dep) => {
      dep.theme.forEach((tvar) => {
        themeVars[tvar] = theme[tvar];
      });
      return themeVars;
    }, {}),
  });

  return (
    <Layout>
      <div className="flex min-h-screen justify-center">
        {/* Controls */}
        <div className="hidden md:block w-1/3 min-w-96 border-r border-gray-300 pt-4">
          <div className="bg-white p-8">
            <div className="text-4xl font-bold">{Doc.name}</div>
            <div className="text-xl font-medium text-gray-600">
              {Doc.description}
            </div>
          </div>
          <PropsManager
            propsList={get(Doc, "props", [])}
            compProps={compProps}
            editProps={setCompProps}
          />
          <ThemeManager themeVars={themeVars} editTheme={setThemeVars} />
        </div>

        {/* Component Container */}
        <div className="flex-1 max-w-7xl pt-4">
          <ResizableFrame className={"fixed"}>
            {Doc.Component ? <Doc.Component {...compProps} /> : <span />}
          </ResizableFrame>
        </div>
      </div>
    </Layout>
  );
};

export default [
  {
    path: "/components/:component",
    exact: true,
    auth: false,
    component: CompDoc,
    layout: "Simple",
  },
  {
    path: "/examples/:component",
    exact: true,
    auth: false,
    component: CompDoc,
    layout: "Simple",
  },
];
