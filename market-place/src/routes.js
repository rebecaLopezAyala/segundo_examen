import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import App from "./App";
import Buy from "./views/Buy/Buy";
import { publicPath, routeCodes } from "./common/routeConfig";

function Routes () {
  return (
    <Fragment>
      <Route path={publicPath} exact component={ App } />
      <Route path={ routeCodes.BUY } component={ Buy } />
    </Fragment>
  );
}

export default Routes;