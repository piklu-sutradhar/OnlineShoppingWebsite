import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import About from './components/Abount'
import { Provider } from 'react-redux';
import store from './stores/ProductStore';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from './components/Layout';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Layout>
            <Router>
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/Signup" component={Signup}></Route>
                <Route path="/Login" component={Login}></Route>
                <Route path="/About" component={About}></Route>
                <Route component={Home}></Route>
              </Switch>
            </Router>
          </Layout>
        </React.Fragment>
      </Provider>

    );
  }
}

export default App;
