import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/menu-item.component';
import './directory-menu.styles.scss';
import { selectDirectorySections } from '../../redux/directory/directory.selector';

const DirectoyMenu = ({directorySections}) => (
  <div className="directory-menu">
    {directorySections.map(({ title, imgUrl, id, size }) => (
      <MenuItem title={title} imgUrl={imgUrl} key={id} size={size} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  directorySections: selectDirectorySections,
});

export default connect(mapStateToProps)(DirectoyMenu);
