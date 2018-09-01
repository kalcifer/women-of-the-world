import React, { Component } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from "react-simple-maps";
import { actions, Tooltip } from "redux-tooltip";
import { connect } from "react-redux";
import giiData from "./gii";

const gii = giiData.reduce((fullData, countryData) => {
  fullData[countryData.Country] = countryData;
  return fullData;
}, {});

const { show, hide } = actions;

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto"
};

class App extends Component {
  handleMove = (geography, evt) => {
    const x = evt.clientX;
    const y = evt.clientY + window.pageYOffset;
    const countryName = geography.properties.name;
    const data = gii[geography.properties.name];
    const content = data ? data["GII Value"] : countryName;
    this.props.dispatch(
      show({
        origin: { x, y },
        content
      })
    );
  };
  handleLeave = () => {
    this.props.dispatch(hide());
  };
  render() {
    return (
      <div style={wrapperStyles}>
        <ComposableMap
          projectionConfig={{
            scale: 205,
            rotation: [-11, 0, 0]
          }}
          width={980}
          height={551}
          style={{
            width: "100%",
            height: "auto"
          }}
        >
          <ZoomableGroup center={[0, 20]} disablePanning>
            <Geographies geography="./static/world-50m.json">
              {(geographies, projection) =>
                geographies.map(
                  geography =>
                    geography.id !== "ATA" && (
                      <Geography
                        data-tip
                        data-for={geography.id}
                        geography={geography}
                        projection={projection}
                        onMouseMove={this.handleMove}
                        onMouseLeave={this.handleLeave}
                        style={{
                          default: {
                            fill: "#ECEFF1",
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
                    )
                )
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
        <Tooltip />
      </div>
    );
  }
}

export default connect()(App);
