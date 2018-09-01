import React, { Component } from "react";
import Downshift from "downshift";
import { connect } from "react-redux";
import { changeContentType } from "./actions";

const items = [
  "GII Value",
  "GII Rank",
  "Maternal mortality ratio",
  "Adolescent birth rate",
  "Share of seats in parliament",
  "Population with at least some secondary education",
  "Labour force participation rate"
];

class Selector extends Component {
  render() {
    return (
      <Downshift
        onChange={({ value }) => this.props.dispatch(changeContentType(value))}
        itemToString={item => (item ? item : "")}
      >
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem
        }) => (
          <div>
            <label {...getLabelProps()}>Enter a type</label>
            <input {...getInputProps()} />
            <ul {...getMenuProps()}>
              {isOpen
                ? items
                    .filter(item => !inputValue || item.includes(inputValue))
                    .map((item, index) => (
                      <li
                        {...getItemProps({
                          key: item,
                          index,
                          item,
                          style: {
                            backgroundColor:
                              highlightedIndex === index
                                ? "lightgray"
                                : "white",
                            fontWeight:
                              selectedItem === item ? "bold" : "normal"
                          }
                        })}
                      >
                        {item}
                      </li>
                    ))
                : null}
            </ul>
          </div>
        )}
      </Downshift>
    );
  }
}

export default connect()(Selector);
