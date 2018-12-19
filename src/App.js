import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Logout from './components/Logout';
import Create from './components/Create';
import { BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route path={`/`} component={Home} exact/>
          <Route path={`/about`} component={About} exact/>
          <Route path={`/login`} component={Login} exact/>
          <Route path={`/signup`} component={SignUp} exact/>
          <Route path={`/logout`} component={Logout} exact/>
          <Route path={`/create`} component={Create} exact/>
          <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;
