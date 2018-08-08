import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {connect} from "react-redux";

import { tokenLogin } from './actions';

import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from './pages/ProfilePage';
import PartnerPage from './pages/PartnerPage';
import HistoryPage from './pages/HistoryPage';
import LogoutPage from './pages/LogoutPage';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.tokenLogin();
  }

  render() {
    return (
        <div className="container">
          <Router>
            <div style={{ marginTop: '7rem' }}>
                <NavBar />
                <Route path="/" exact component={WelcomePage} />
                <Route path="/login" exact component={LoginPage} />
                <Route path="/register" exact component={RegisterPage} />
                <Route path="/partner" exact component={PartnerPage} />
                <Route path="/profile" exact component={ProfilePage} />
                <Route path="/history" exact component={HistoryPage} />
                <Route path="/logout" exact component={LogoutPage} />
                <Footer/>
            </div>
          </Router> 
        </div>
    );
  }
}

export default connect(null, { tokenLogin })(App);
