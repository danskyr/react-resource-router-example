import React from "react";
import {
  createBrowserHistory,
  RouteComponent,
  Router
} from "react-resource-router";
import { dogsRoute, errorRoute, homeRoute } from "./routes";
import "./styles.css";

const myHistory = createBrowserHistory();
const App = () => {
  return (
    <div className="App">
      <Router history={myHistory} routes={[homeRoute, dogsRoute, errorRoute]}>
        <RouteComponent />
      </Router>
    </div>
  );
};

export default App;
