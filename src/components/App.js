import React from "react";
import "../styles/App.css";
import CreateLink from "./CreateLink";
import LinkList from "./LinkList";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Login from './Login'
import Search from "./Search";

function App() {
  return (
      <div className="center w85">
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" component={LinkList} />
            <Route exact path="/create" component={CreateLink} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/search" component={Search} />
          </Switch>
        </div>
      </div>
  );
}

export default App;
