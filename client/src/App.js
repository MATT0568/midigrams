import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Info from "./pages/Info";
import NoMatch from "./pages/NoMatch";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Cookies from "js-cookie";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: Cookies.get('userId')
    };
    this.loggedCheck = this.loggedCheck.bind(this);
  }

  loggedCheck() {
    this.setState({
      isLoggedIn: Cookies.get('userId')
    });
  };

  render() {
    if (!this.state.isLoggedIn) {
      return (
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" render={(props) => <Login {...props} loggedCheck={this.loggedCheck} />} />
              <Route exact path="/signup" component={SignUp} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      );
    }
    else {
      return (
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/info" component={Info} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      );
    }
  }
}

export default App;
