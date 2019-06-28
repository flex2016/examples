import React, { Component } from "react";
import "./TourList.scss";
import Tour from "../Tour/Tour";

export default class TourList extends Component {
  render() {
    return (
      <section className="tourlist">
        <Tour />
      </section>
    );
  }
}
