import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "pages/Layout";
import get from "lodash.get";

import PropsManager from "./components/PropsManager";
import ThemeManager from "./components/ThemeManager";
import ResizableFrame from "./components/ResizableFrame";
import {RenderTabs} from "./components/Tabs";

import { useTheme } from "modules/avl-components/src/";
import components from "components";
import examples from "pages/ExampleList/examples";

// code highlighter
import Lowlight from 'react-lowlight'
import javascript from 'highlight.js/lib/languages/javascript'
// import './components/hljs.css';
Lowlight.registerLanguage('js', javascript)

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
  const [example, setExample] = useState(0);
  const [view, setView] = useState('Code');

  const [compProps, setCompProps] = useState(
    get(Doc, `examples[${example}].props`, []).reduce((compProps, prop) => {
      compProps[prop.name] = prop.default;
      return compProps;
    }, {})
  );
  React.useEffect(() => {
    // console.log("location changed", component);
    setDoc(compLib[component].doc);
  }, [component]);

  const [themeVars, setThemeVars] = useState({
    ...get(Doc, `examples[${example}].theme`, []).reduce((themeVars, tvar) => {
      themeVars[tvar] = theme[tvar];
      return themeVars;
    }, {}),
    ...get(Doc, `examples[${example}].dependencies`, []).reduce(
      (themeVars, dep) => {
        dep.theme.forEach((tvar) => {
          themeVars[tvar] = theme[tvar];
        });
        return themeVars;
      },
      {}
    ),
  });

  const DocComp = get(Doc, `examples[${example}].Component`, () => <span />);
  const codeComp = get(Doc, `examples[${example}].code`, () => <span />);

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
            propsList={get(Doc, `examples[${example}].props`, [])}
            compProps={compProps}
            editProps={setCompProps}
          />
          <ThemeManager themeVars={themeVars} editTheme={setThemeVars} />
        </div>

        {/* Component Container */}
        <div className="flex-1 max-w-7xl pt-4">
          <ResizableFrame className={"fixed"}>
            {RenderTabs(view, setView)}
            {
              view === 'Preview' ? <DocComp {...compProps} /> : <Lowlight language="js" value={codeComp} />
            }
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
