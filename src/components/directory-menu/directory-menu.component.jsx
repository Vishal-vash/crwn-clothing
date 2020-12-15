import React, { Component } from "react";

import MenuItem from '../menu-item/menu-item.component';
import "./directory-menu.styles.scss";

class DirectoyMenu extends Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "hats",
          imgUrl: "/assets/images/hats.jpg",
          id:1,
          size: ''
        },
        {
          title: "jackets",
          imgUrl: "/assets/images/jackets.jpg",
          id:2,
          size: ''
        },
        {
          title: "sneakers",
          imgUrl: "/assets/images/sneakers.jpg",
          id:3,
          size: ''
        },
        {
          title: "men",
          imgUrl: "/assets/images/men-2.jpg",
          id:4,
          size: 'large'
        },
        {
          title: "women",
          imgUrl: "/assets/images/women.jpg",
          id:5,
          size: 'large'
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imgUrl, id, size }) => (
          <MenuItem title={title} imgUrl={imgUrl} key={id} size={size} />
        ))}
      </div>
    );
  }
}
export default DirectoyMenu;
