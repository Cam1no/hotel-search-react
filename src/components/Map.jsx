import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';


const InnterMap = withGoogleMap(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
  </GoogleMap>
);

const Map = props => (
  <InnterMap
    containerElement={(<div />)}
    mapElement={(<div className="map"/>)}
  />
)


export default Map;
