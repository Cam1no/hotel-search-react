import React, { PropTypes } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';


const InnterMap = withGoogleMap(props =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={props.position}
    center={props.position}
  >
  <Marker { ...props.marker } />
  </GoogleMap>
);

const Map = ({ lat, lng }) => {
  const position = { lat, lng };
  return (
    <InnterMap
      containerElement={(<div />)}
      mapElement={(<div className="map" />)}
      position={position}
      marker={{ position }}
    />
  );
};

Map.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
};

Map.defaultProps = {
  lat: -34.397,
  lng: 150.644,
};

export default Map;
