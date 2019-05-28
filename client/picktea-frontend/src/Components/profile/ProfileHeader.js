import React, { Component } from 'react';
import {Link} from 'react-router-dom';
//import isEmpty from '../../validation/is-empty';

import { GoogleMap, LoadScript, Polygon, DrawingManager } from '@react-google-maps/api';

class ProfileHeader extends Component {
    constructor(){
        super();
        this.state = {
            userName: '',
            estate: '',
            errors: {}
        };
    }

    render() {
        return (

        <div class="profile">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">

                        <div className="row">
                            <div className="col-md-6">
                                <h3 className="text-center text-info"> </h3>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <h4>Summary</h4>
                                        <p>Oct 2018 - Current</p>
                                        <p>
                                            <strong>Status:</strong> normal
                                        </p>
                                        <p>
                                            <strong>Description:</strong> Lorem ipsum dolor sit amet consectetur
                                            adipisicing elit. Unde doloribus dicta enim
                                            excepturi laborum voluptatem nam provident quisquam facere. Quae?</p>
                                    </li>

                                    <li className="list-group-item">
                                        <div className="row">
                                            <Link to="/register" className="btn btn-lg btn-info mr-5">Add New Estate</Link>
                                        </div>
                                        <br/>

                                        <div className="row">
                                            <Link to="/register" className="btn btn-sm btn-info mr-2">Flight Path</Link>
                                            <Link to="/register" className="btn btn-sm btn-info mr-2">Heat Map</Link>
                                            <Link to="/register" className="btn btn-sm btn-info mr-2">Yield</Link>
                                            <Link to="/register" className="btn btn-sm btn-info mr-2">Plucking Table</Link>
                                            <Link to="/register" className="btn btn-sm btn-info mr-2">Maintenance</Link>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                            <div className="col-md-6">
                                <h3 className="text-center text-info"></h3>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <div className="col-md-12">
                                            <div className="card card-body bg-info text-white mb-3">
                                                <div className="row">
                                                    <div className="col-4 col-md-5 m-auto">
                                                        <img className="rounded-circle"
                                                             src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                                                             alt=""/>
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <h3 className="display-6 text-center">Chathura Jayasanka</h3>
                                                    <p className="lead text-center">Estate Superintendent</p>
                                                    <p>Seattle, WA</p>
                                                </div>
                                            </div>
                                        </div>

                                    </li>
                                </ul>
                            </div>
                        </div>


                        <div class="row">
                            <div class="col-md-12">
                                <div class="card card-body bg-light mb-3">
                                    <LoadScript
                                        id="script-loader"
                                        googleMapsApiKey="AIzaSyD11iqwl4dM1oIWB0QG8qp53hx3hz8CMkU">
                                        <GoogleMap id='example-map' mapContainerStyle={{
                                            height: "400px",
                                            width: "1040px"}}
                                                   zoom={12}
                                                   center={{
                                                       lat: 6.795868,
                                                       lng: 79.899639
                                                   }} mapTypeId= 'satellite'>

                                            <Polygon
                                                onLoad={polygon => {
                                                    console.log("polygon: ", polygon);
                                                }}
                                                paths={[
                                                    { lat: 6.793548, lng: 79.891710 },
                                                    { lat: 6.798325, lng: 79.893084 },
                                                    { lat: 6.797441, lng: 79.901955 },
                                                    { lat: 6.793617, lng: 79.901493 }
                                                ]}
                                                options={{
                                                    fillColor: "lightblue",
                                                    fillOpacity: 1,
                                                    strokeColor: "red",
                                                    strokeOpacity: 1,
                                                    strokeWeight: 2,
                                                    clickable: false,
                                                    draggable: false,
                                                    editable: false,
                                                    geodesic: false,
                                                    zIndex: 1
                                                }}
                                            />

                                            <DrawingManager
                                                onLoad={drawingManager => {
                                                    console.log(drawingManager)
                                                }}
                                                onPolygonComplete={(polygon) => console.log({polygon})}
                                            />
                                        </GoogleMap>
                                    </LoadScript>
                                </div>
                            </div>
                        </div>

                        <div ref="myRef">
                            <hr />
                            <h3 class="mb-4">Latest Statistics</h3>
                            <div class="card card-body mb-2">
                                <div class="row">
                                    <div class="col-md-6">
                                        <h4>
                                            <Link to="/register" class="text-info" target="_blank"> Section One
                                            </Link>
                                        </h4>
                                        <p>Section description</p>
                                    </div>
                                    <div class="col-md-6">
                  <span class="badge badge-info mr-1">
                    Labourers : 44
                  </span>
                                        <span class="badge badge-secondary mr-1">
                    Inspections: 21
                  </span>
                                        <span class="badge badge-success">
                    Rating: 8
                  </span>
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

export default ProfileHeader;
