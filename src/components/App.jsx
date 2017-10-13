import React, { Component } from 'react';

import SearchForm from './SearchForm';
import GeocodeResult from './GeocodeResult';
import Map from './Map';
import { geocoder } from '../domain/Geocoder';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        lat: -34.397,
        lng: 150.644,
      }
    };
  }

  setErrorMessage(message) {
    this.setState({
      address: message,
      location: {
        lat: 0,
        lng: 0,
      }
    });
  }

  handlePlaceSubmit(place) {
    geocoder(place)
      .then(({ status, address, location }) => {
        switch (status) {
          case 'OK': {
            this.setState({address, location});
            break;
          }
          case 'ZERO_RESULTS': {
            this.setErrorMessage('結果が見つかりませんでした')
            break;
          }
          default: {
            this.setErrorMessage('エラーが発生しました')
          }
        }
      })
      .catch(() => {
        this.setErrorMessage('通信に失敗しました')
      });
  }

  render() {
    return (
      <div>
        <h1>緯度経度検索</h1>
        <SearchForm onSubmit={place => this.handlePlaceSubmit(place)} />
        <GeocodeResult
          address={this.state.address}
          location={this.state.location}
        />
      <Map location={this.state.location} />
      </div>
    );
  }
}

export default App;
