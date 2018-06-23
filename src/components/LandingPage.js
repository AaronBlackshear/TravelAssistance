import React, { Component } from "react";

import { connect } from "react-redux";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

import { finishStepOne } from "../ducks/reducer";

class LandingPage extends Component {
  state = {
    userInput: ""
  };

  handleUserInput = (key, e) => {
    this.setState({ [key]: e.target.value });
  };

  render() {
    const MyMapComponent = withScriptjs(
      withGoogleMap(props => {
        return (
          <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: 32.7767, lng: -96.797 }}
          >
            {props.isMarkerShown && (
              <Marker position={{ lat: 32.7767, lng: -96.797 }} />
            )}
          </GoogleMap>
        );
      })
    );

    return (
      <div>
        <h1>Where would you like to go?</h1>
        <input
          value={this.state.userInput}
          onChange={e => {
            this.handleUserInput("userInput", e);
          }}
        />
        <button onClick={() => finishStepOne(this.state.userInput)}>
          Next Step
        </button>
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

const mapStateToProps = state => {
  return { ...state };
};

export default connect(
  mapStateToProps,
  { finishStepOne }
)(LandingPage);
