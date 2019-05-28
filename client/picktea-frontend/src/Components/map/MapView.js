import React, {Component} from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api'


class MapView extends Component {
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
            <LoadScript
                id="script-loader"
                googleMapsApiKey="AIzaSyD11iqwl4dM1oIWB0QG8qp53hx3hz8CMkU">
                <GoogleMap id='small_map' mapContainerStyle={{
                    height: "200px",
                    width: "250px"}}
                           zoom={15}
                           center={{
                               lat: 6.795868,
                               lng: 79.899639
                           }} mapTypeId= 'satellite'
                >

                </GoogleMap>
            </LoadScript>
        );

    }

}

export default MapView;
