import React, { Component } from "react";
import { Geography } from "react-simple-maps";
import { connect } from "react-redux";
import { actions } from "redux-tooltip";
import { calcs } from "./color-calculators";
import giiData from "./gii";
const { show, hide } = actions;

class GeoWithTooltip extends Component {
  state = {
    content: "",
    color: "#ECEFF1"
  };

  componentDidMount() {
    this.setContentAndColor();
  }
  componentDidUpdate(prevProps) {
    if (this.props.contentType !== prevProps.contentType) {
      this.setContentAndColor();
    }
  }
  setContentAndColor = () => {
    const { geography, contentType } = this.props;
    const countryName = geography.properties.name;
    const calc = calcs[contentType] || calcs["default"];
    const content = giiData[countryName]
      ? giiData[countryName][contentType]
      : countryName;
    const color = calc(content);
    this.setState({ content, color });
  };
  handleMove = (geography, evt) => {
    const x = evt.clientX;
    const y = evt.clientY + window.pageYOffset;

    this.props.dispatch(
      show({
        origin: { x, y },
        content: `${geography.properties.name} - ${this.state.content}`
      })
    );
  };
  handleLeave = () => {
    this.props.dispatch(hide());
  };
  render() {
    const { geography, projection } = this.props;
    const { color } = this.state;
    return (
      <Geography
        geography={geography}
        projection={projection}
        onMouseMove={this.handleMove}
        onMouseLeave={this.handleLeave}
        style={{
          default: {
            fill: color,
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
