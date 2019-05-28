import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class NavBar extends Component{

    render(){
        return(
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                <div className="container">
                    <Link className="navbar-brand" to="/">Home</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">
                                    Dashboard
                                </Link>
                            </li>
                        </ul>

                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/profile">
                                    My Estate
                                </Link>
                            </li>
                        </ul>

                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/profiles">
                                    Compare
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

}

export default NavBar;