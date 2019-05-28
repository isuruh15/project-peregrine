
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
               }}>

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
    </GoogleMap>
</LoadScript>