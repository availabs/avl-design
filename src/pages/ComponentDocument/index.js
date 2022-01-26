import React, { useState, useRef } from "react";
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

import reactElementToJSXString from 'react-element-to-jsx-string';

Lowlight.registerLanguage('jsx', javascript)

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
  const [fixedSize, setFixedSize] = useState(0)
  const fixedRef = useRef(null);

  const [compProps, setCompProps] = useState(
    get(Doc, `examples[${example}].props`, []).reduce((compProps, prop) => {
      compProps[prop.name] = prop.default;
      return compProps;
    }, {})
  );

  React.useEffect(() => {
    function handleResize() {
      // console.log('setWidth',  get(fixedRef, 'current.offsetWidth', 0))
      setFixedSize(get(fixedRef, 'current.offsetWidth', 0));
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

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

  const DocComp = get(Doc, `examples[${example}].Component`, <span />);
  const codeComp = get(Doc, `examples[${example}].code`, <span />);
  
  return (
    <Layout>
      <div className="flex flex-1 justify-center">
        {/* Controls */}
        <div className="hidden md:block w-1/3 min-w-96 border-r border-gray-300">
          <div className="bg-white p-8 border-t border-b">
            <div className="text-4xl font-bold py-4">{Doc.name}</div>
            <div className="text-xl font-medium text-gray-600 py-4">
              {Doc.description}
            </div>
          </div>
          <div>
            <div className='px-8 py-4 bg-white'>
              <div className="text-2xl font-bold">Component Props</div>
              <div className="text-xl font-medium text-gray-600 flex items-center py-4">
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
            </div>
            <PropsManager
              propsList={get(Doc, `props`, [])}
              compProps={compProps}
              editProps={setCompProps}
            />
          </div>
          <ThemeManager themeVars={themeVars} editTheme={setThemeVars} />
        </div>

        {/* Component Container */}
        <div className="flex-1 max-w-7xl " ref={fixedRef}>
          <div className="fixed h-screen -mt-12 z-50" style={{width: fixedSize}}>
            {RenderTabs(view, setView)}
            <ResizableFrame fixedSize={fixedSize}>
            {
              view === 'Preview' 
                ? <DocComp {...compProps}/> 
                : <Lowlight language="js" className='p-4' value={reactElementToJSXString(
                    <div className="h-full w-full bg-gray-100">
                      <DocComp {...compProps} />
                    </div>).replace('Component', component)} 
                  />
            }
          </ResizableFrame>
          </div>
          
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
