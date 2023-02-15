import './App.css';
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import * as Sentry from "@sentry/react";

// import pages
import Dash from "./pages/Dashboard/Dash";
import Players from "./pages/Dashboard/Players";
import ViewPlayer from "./pages/Dashboard/ViewPlayer";
import Login from "./pages/Auth/Login";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'} component={Dash}/>
                    <Route exact path={'/login'} component={Login}/>
                    <Route path={'/players'} component={Players}/>
                    <Route path={'/player'} component={ViewPlayer}/>
                </Switch>
        </BrowserRouter>
      </div>
  );
}

export default Sentry.withProfiler(App);
