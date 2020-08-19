import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import About from './components/Abount';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import store from './stores/ProductStore';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from './components/Layout';

class App extends Component {
  // componentDidMount(){
  //   fetch('http://127.0.0.1:5000/getproducts')
  //   .then((response) => response.json())
  //   .then((data) => console.log(data))
  // }
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
                <Route path="/Cart" component={Cart}></Route>
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
