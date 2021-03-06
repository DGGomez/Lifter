import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logoutUser } from '../actions';

class NavBar extends Component {
    render() {
        const { user } = this.props;
        return (
            <nav className="navbar navbar-inverse bg-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">
                            <strong>
                                Lifter
                            </strong>
                        </Link>
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapsible" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="pull-right nav-container" id="collapsible">
                        {user ? 
                            <ul className="nav navbar-nav navbar-right">
                                <li className="nav-item"><Link to="/profile">Profile</Link></li>
                                <li className="nav-item">
                                    <Link to="/logout">Logout</Link>
                                </li>
                            </ul>
                            : 
                            <ul className="nav navbar-nav navbar-right">
                                <li className="nav-item"><Link to="/login">Login</Link></li>
                                <li className="nav-item"><Link to="/Register">Register</Link></li>
                            </ul>
                        }
                    </div>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    console.log('nav mstp: ', auth);
    return { user: auth.user };
};

export default connect(mapStateToProps, { logoutUser })(NavBar);