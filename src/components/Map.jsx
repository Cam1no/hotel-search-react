import React, { PropTypes } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';


const InnterMap = withGoogleMap(({ location, marker }) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={location}
    center={location}
  >
  <Marker { ...marker } />
  </GoogleMap>
);

const Map = ({ location }) => (
  <InnterMap
    containerElement={(<div />)}
    mapElement={(<div className="map" />)}
    location={location}
    marker={{ location }}
  />
);

Map.propTypes = {
  location: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Map;
