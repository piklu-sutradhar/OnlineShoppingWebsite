import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import { Provider } from 'react-redux';
import store from './stores/ProductStore';


class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <React.Fragment>
          <Home>
          </Home>
        </React.Fragment>
      </Provider>

    );
  }
}

export default App;
