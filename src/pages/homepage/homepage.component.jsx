import React from "react";

import DirectoyMenu from '../../components/directory-menu/directory-menu.component';
import "./homePage.styles.scss";

const HomePage = (props) => {
  return (
    <div className="homepage">
      <DirectoyMenu />
    </div>
  );
};

export default HomePage;
