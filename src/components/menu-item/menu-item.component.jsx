import React from "react";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imgUrl, size }) => (
  <div className={`menu-item ${size}`}>
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

export default MenuItem;
