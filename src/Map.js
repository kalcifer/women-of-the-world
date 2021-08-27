import React, { Component } from "react";
import { ComposableMap, ZoomableGroup, Geographies } from "react-simple-maps";
import { Tooltip } from "redux-tooltip";

import GeoWithTooltip from "./GeoWithTooltip";

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto"
};

class App extends Component {
  render() {
    return (
      <div style={wrapperStyles}>
        <ComposableMap
          projectionConfig={{
            scale: 220,
            rotation: [-11, 0, 0]
          }}
          width={980}
          height={750}
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
                      <GeoWithTooltip
                        geography={geography}
                        projection={projection}
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

export default App;
