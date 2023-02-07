import './App.css';
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import * as Sentry from "@sentry/react";

// import pages
import Dash from "./pages/Dashboard/Dash";

function App() {
  return (
      <div>
        <BrowserRouter>
            <Switch>
                <Route path={'/'} component={Dash}/>
            </Switch>

        </BrowserRouter>
      </div>
  );
}

export default Sentry.withProfiler(App);
