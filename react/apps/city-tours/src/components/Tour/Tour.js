import React, { Component } from "react";
import "./Tour.scss";

export default class Tour extends Component {
  render() {
    return (
      <article className="tour">
        <div className="img-container">
          <img
            src="https://www-tc.pbs.org/wnet/nature/files/2017/10/reqzNZB-asset-mezzanine-16x9-dWu5cfN.jpg"
            alt=""
          />
          <span className="close-btn">
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="tour-info">
          <h3>Hello</h3>
          <h4>name</h4>
          <h5>
            info
            <span>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est enim
            voluptates culpa neque facere aliquid deserunt illum exercitationem
            quidem recusandae! Eveniet eos dignissimos sit vitae, deserunt sequi
            animi est modi.
          </p>
        </div>
      </article>
    );
  }
}
