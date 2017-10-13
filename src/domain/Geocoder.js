import axios from 'axios';

const GEOCODE_ENDPOINT = 'http://maps.googleapis.com/maps/api/geocode/json'

export const geocoder = place =>
  axios
    .get(GEOCODE_ENDPOINT, { params: { address: place } })
    .then(results => {
      const data = results.data;
      const status = data.status;
      const result = data.results[0];
      if (typeof result === 'undefined'){
        return { status };
      }
      const address = result.formatted_addres;
      const location = result.geometry.location;
      return { status, address, location };
    })
;

export const reverseGeocode = () => null;
