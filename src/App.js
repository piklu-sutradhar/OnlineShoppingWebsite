import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './components/NavigationBar'
import Home from './components/Home'


class App extends Component{ 
  render() {
  return (
    <React.Fragment>
      <NavigationBar>        
      </NavigationBar>
    <Home>   
    </Home>
    </React.Fragment>
  );
}
}

export default App;
