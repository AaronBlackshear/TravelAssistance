import React, { Component } from "react";

import { connect } from "react-redux";
import { test } from "../ducks/reducer";

class Home extends Component {
  render() {
    this.props.test();
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

export default connect(
  mapStateToProps,
  { test }
)(Home);
