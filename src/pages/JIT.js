import React, { Component } from "react";
import { Themes } from "modules/avl-components/src";
import get from "lodash.get";

let Theme = get(Themes, "AVL_THEME", Themes["light"]);
class JIT extends Component {
  render() {
    console.log();
    return (
      <div className={Object.values(Theme).join(" ")}>
        {Object.values(Theme).join(" ")}
      </div>
    );
  }
}

export default {
  mainNav: false,
  path: "/jit",
  component: JIT,
  layoutSettings: {
    nav: "top",
    fixed: true,
    headerBar: false,
    theme: "light",
  },
};
