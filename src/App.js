import React, { Component } from "react";
import Map from "./Map";
import { Provider } from "react-redux";
import { initStore } from "./store";

export default class extends Component {
  store = null;
  constructor() {
    super();
    this.store = initStore();
  }
  render() {
    return (
      <Provider store={this.store}>
        <Map />
      </Provider>
    );
  }
}
