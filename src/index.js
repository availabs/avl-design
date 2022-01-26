import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { API_HOST } from "config";
import { AUTH_HOST, PROJECT_NAME, CLIENT_HOST } from "config";

import { Provider } from "react-redux";
import store from "store";
import {
  Themes,
  ThemeContext,
  FalcorProvider,
  falcorGraph,
  addComponents,
  addWrappers,
} from "modules/avl-components/src";

import reportWebVitals from "./reportWebVitals";
import get from "lodash.get";

import DmsComponents from "modules/dms";
import DmsWrappers from "modules/dms/wrappers";

import {
  Components as AmsComponents,
  Wrappers as AmsWrappers,
  enableAuth,
} from "@availabs/ams";

// import "styles/tailwind.css";
import './index.css';
import "styles/index.css";
import "styles/fonts/os-icons.css";

// console.log("theme", Theme);

addComponents(DmsComponents);
addWrappers(DmsWrappers);

addComponents(AmsComponents);
addWrappers(AmsWrappers);

const AuthEnabledApp = enableAuth(App, {
  AUTH_HOST,
  PROJECT_NAME,
  CLIENT_HOST,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <FalcorProvider falcor={falcorGraph(API_HOST)}>
        <ThemeContext.Provider
          value={get(Themes, "AVL_THEME", Themes["light"])}
        >
          <AuthEnabledApp />
        </ThemeContext.Provider>
      </FalcorProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
