import React, { Component } from "react";
import { Geography } from "react-simple-maps";
import { connect } from "react-redux";
import { actions } from "redux-tooltip";
import { calcs } from "./color-calculators";
import giiData from "./gii";
const { show, hide } = actions;

class GeoWithTooltip extends Component {
  content = "";
  color = "#ECEFF1";
  constructor(props) {
    super(props);
    const { geography, contentType } = props;
    const countryName = geography.properties.name;
    const calc = calcs[contentType];
    this.content = giiData[countryName]
      ? giiData[countryName][contentType]
      : countryName;
    this.color = calc(this.content);
  }
  handleMove = (geography, evt) => {
    const x = evt.clientX;
    const y = evt.clientY + window.pageYOffset;

    this.props.dispatch(
      show({
        origin: { x, y },
        content: this.content
      })
    );
  };
  handleLeave = () => {
    this.props.dispatch(hide());
  };
  render() {
    const { geography, projection } = this.props;
    return (
      <Geography
        geography={geography}
        projection={projection}
        onMouseMove={this.handleMove}
        onMouseLeave={this.handleLeave}
        style={{
          default: {
            fill: this.color,
            stroke: "#607D8B",
            strokeWidth: 0.75,
            outline: "none"
          },
          hover: {
            cursor: "pointer",
            fill: "#607D8B",
            stroke: "#607D8B",
            strokeWidth: 0.75,
            outline: "none"
          },
          pressed: {
            fill: "#FF5722",
            stroke: "#607D8B",
            strokeWidth: 0.75,
            outline: "none"
          }
        }}
      />
    );
  }
}

export default connect(
  state => {
    return {
      contentType: state.app.contentType
    };
  },
  null
)(GeoWithTooltip);
