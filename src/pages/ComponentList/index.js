import React from "react";
// import {useFalcor} from '@availabs/avl-components'
import { Link } from "react-router-dom";
import Layout from "pages/Layout";
// import get from 'lodash.get'

import components from "components";

const config = components.reduce((output, comp) => {
  if (!output[comp.section]) {
    output[comp.section] = {};
  }
  output[comp.section][comp.name] = comp;
  return output;
}, {});

const Home = ({ ...props }) => {
  return (
    <Layout>
      <div className="w-full max-w-7xl mx-auto">
        <div className="pt-4 pb-3 px-6">
          <h3 className="inline font-bold text-3xl">Components</h3>
        </div>
        <div>
          {Object.keys(config).map((section, i) => (
            <div
              key={i}
              className="grid grid-cols-3 xl:grid-cols-4 py-8 gap-x-8 gap-y-6"
            >
              <h3 className="text-gray-900 font-semibold col-span-3 xl:col-span-1">
                {section}
              </h3>
              <div className="col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-y-8 lg:gap-x-8">
                {Object.keys(config[section]).map((comp, j) => (
                  <Link
                    key={j}
                    to={`/components/${comp}`}
                    className="group relative bg-white rounded-lg shadow-sm overflow-hidden ring-1 ring-black ring-opacity-5"
                  >
                    <figure>
                      <div className="relative bg-gray-100 pt-[50%] overflow-hidden">
                        <div className="absolute inset-0 w-full h-full rounded-t-lg overflow-hidden">
                          <img
                            src={config[section][comp].img}
                            alt=""
                            className="absolute inset-0 w-full h-full"
                          />
                        </div>
                      </div>
                      <figcaption className="py-3 px-4">
                        <p className="text-sm font-medium text-gray-900 mb-1">
                          {comp}
                        </p>
                      </figcaption>
                    </figure>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default {
  path: "/components/",
  exact: true,
  auth: false,
  component: Home,
  layout: "Simple",
};
