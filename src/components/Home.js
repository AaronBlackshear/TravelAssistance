import React, { Component } from "react";

import { connect } from "react-redux";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

class Home extends Component {
  render() {
    const MyMapComponent = withScriptjs(
      withGoogleMap(props => {
        return (
          <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: 32.7767, lng: -96.7970 }}
          >
            {props.isMarkerShown && (
              <Marker position={{ lat: 32.7767, lng: -96.7970 }} />
            )}
          </GoogleMap>
        );
      })
    );
    return (
      <div>
        <h1>Home</h1>
        <MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `50vh`, width: `80vw` }} />}
        />
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Home);
