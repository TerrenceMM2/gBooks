import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Error404 from "./pages/Error404";
import Navbar from "./components/Navbar"
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route component={Error404} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
