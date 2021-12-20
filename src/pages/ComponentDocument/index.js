import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "pages/Layout";
import get from "lodash.get";

import PropsManager from "./components/PropsManager";
import ThemeManager from "./components/ThemeManager";
import ResizableFrame from "./components/ResizableFrame";
import {RenderTabs} from "./components/Tabs";

import { useTheme, Select } from "modules/avl-components/src/";
import components from "components";
import examples from "pages/ExampleList/examples";

// code highlighter
import Lowlight from 'react-lowlight'
import javascript from 'highlight.js/lib/languages/javascript'
import {AVL_THEME_dynamic} from "../../modules/avl-components/src/Themes";
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
  const [view, setView] = useState('Preview');
  const [color, setColor] = useState('white');
  const [size, setSize] = useState('compact');

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
            <div className="text-xl font-medium text-gray-600 flex items-center">
              <label>Example: </label>
              <Select
                  domain={get(Doc, `examples`, []).map(e => e.title)}
                  value={get(Doc, `examples[${example}].title`, [])}
                  onChange={e => {
                    let newExample = get(Doc, `examples`, []).findIndex(ex => ex.title === e)
                    setExample(newExample)

                    setCompProps(get(Doc, `examples[${newExample}].props`, []).reduce((compProps, prop) => {
                      compProps[prop.name] = prop.default;
                      return compProps;
                    }, {}))
                  }}
              />
            </div>
            <div className="text-xl font-medium text-gray-600 flex items-center">
              <label>Theme: </label>
              <Select
                  domain={['transparent', 'white', 'dark', 'gray', 'bright']}
                  value={color}
                  onChange={e => setColor(e)}
              />
              <Select
                  domain={['compact', 'full', 'mini', 'micro']}
                  value={size}
                  onChange={e => setSize(e)}
              />
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
          {RenderTabs(view, setView)}
          <ResizableFrame className={"fixed"}>
            {
              view === 'Preview' ? <DocComp {...compProps} theme={AVL_THEME_dynamic(color, size)}/> : <Lowlight language="js" value={codeComp} />
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
