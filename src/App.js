import React from "react";
import Header from "./components/common/Header";
import List from "./components/lists/List";
import Detail from "./components/details/Detail";
import NotFound from "./components/notfound/NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" render={() => <List />} />
          <Route exact path="/details/:currencyId" component={Detail} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
