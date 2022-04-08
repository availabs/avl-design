import React from "react";
// import {useFalcor} from '@availabs/avl-components'
// import { Link } from 'react-router-dom'
import Layout from "pages/Layout";
// import get from 'lodash.get'

const Home = ({ ...props }) => {
  return (
    <Layout>
      <div className="w-full max-w-7xl mx-auto">
        <div className="pt-4 pb-3 px-6">
          <h3 className="inline font-bold text-3xl">Home</h3>
          <p>AVAIL Design is a design system with functional themes aimed at r</p>
          <ul>
            <li>Default props for components should always prefer the simplest form of the component.</li>
            <li>The components source should have as little hard coded classes as possible,
               only classes which are essential to what the compoenet is should be hardcoded in the component.
               Even still, these classes should be prefered to be in the theme.</li>
            <li>The theme function for the object should strive to have as few variables as possible. All composition, should be done inside the theme.
            </li>
            </ul>
        </div>
      </div>
    </Layout>
  );
};

export default {
  path: "/",
  exact: true,
  auth: false,
  component: Home,
  layout: "Simple",
};
