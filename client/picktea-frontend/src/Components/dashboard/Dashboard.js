import React, { Component } from 'react';
import {Link} from 'react-router-dom';
//import isEmpty from '../../validation/is-empty';

import { GoogleMap, LoadScript, Polygon } from '@react-google-maps/api';
import MapView from "../map/MapView";

class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            userName: '',
            estate: '',
            errors: {}
        };
    }

    render() {

        return (<div className="profile">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card card-body bg-info text-white mb-3">
                                        <div className="row">
                                            <div className="col-4 col-md-3 m-auto">
                                                <img className="rounded-circle"
                                                     src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                                                     alt=""/>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <h1 className="display-4 text-center">John Doe</h1>
                                            <p className="lead text-center">Developer at Microsoft</p>
                                            <p>Seattle, WA</p>
                                            <p>
                                                <a className="text-white p-2" href="#">
                                                    <i className="fas fa-globe fa-2x"></i>
                                                </a>
                                                <a className="text-white p-2" href="#">
                                                    <i className="fab fa-twitter fa-2x"></i>
                                                </a>
                                                <a className="text-white p-2" href="#">
                                                    <i className="fab fa-facebook fa-2x"></i>
                                                </a>
                                                <a className="text-white p-2" href="#">
                                                    <i className="fab fa-linkedin fa-2x"></i>
                                                </a>
                                                <a className="text-white p-2" href="#">
                                                    <i className="fab fa-instagram fa-2x"></i>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card card-body bg-light mb-3">
                                        <h3 className="text-center text-info">John's Bio</h3>
                                        <div className="row">
                                            <div className="card card-body md-light mb-3"><MapView/></div>
                                            <div className="card card-body md-light mb-3"></div>
                                            <div className="card card-body md-light mb-3">text</div>
                                            <div className="card card-body md-light mb-3">text</div>
                                        </div>
                                        <hr/>
                                        <h3 className="text-center text-info">Skill Set</h3>
                                        <div className="row">
                                            <div className="d-flex flex-wrap justify-content-center align-items-center">
                                                <div className="p-3">
                                                    <i className="fa fa-check"></i> HTML
                                                </div>
                                                <div className="p-3">
                                                    <i className="fa fa-check"></i> CSS
                                                </div>
                                                <div className="p-3">
                                                    <i className="fa fa-check"></i> JavaScript
                                                </div>
                                                <div className="p-3">
                                                    <i className="fa fa-check"></i> Python
                                                </div>
                                                <div className="p-3">
                                                    <i className="fa fa-check"></i> C#
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

    );
    }
}

export default Dashboard;
