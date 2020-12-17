import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imgUrl, size, history }) => (
  <div className={`menu-item ${size}`} onClick={() => history.push(`${title}`)}>
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imgUrl})` }}
    ></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">Shop Now</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
