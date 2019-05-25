import React, { Component } from 'react';
import {MemoryRouter  as Router, Route} from 'react-router';


import NavBar from './Components/layout/NavBar';
import Footer from './Components/layout/Footer';
import Landing from './Components/layout/Landing';
import Register from './Components/auth/Register';
import Login from './Components/auth/Login';
import Dashboard from './Components/dashboard/Dashboard';
import ProfileHeader from './Components/profile/ProfileHeader';



import './Utils/App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <NavBar/>
                    <Route exact path="/" component={Landing}/>
                    <div className="container">
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/dashboard" component={Dashboard} />

                        <Route exact path="/profile" component={ProfileHeader} />
                    </div>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;