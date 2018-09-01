import React, { Component, Fragment } from "react";
import Map from "./Map";
import { Provider } from "react-redux";
import { initStore } from "./store";
import Selector from "./select-type";
import Desc from "./descriptions";

export default class extends Component {
  store = null;
  constructor() {
    super();
    this.store = initStore();
  }
  render() {
    return (
      <Provider store={this.store}>
        <Fragment>
          <Selector />
          <Desc />
          <Map />
        </Fragment>
      </Provider>
    );
  }
}
