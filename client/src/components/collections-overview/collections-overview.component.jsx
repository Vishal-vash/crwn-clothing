import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './collections-overview.styles.scss';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollections } from '../../redux/shop/shop.selector';

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {Object.keys(collections).map((collectionKey) => (
      <CollectionPreview
        key={collections[collectionKey].id}
        {...collections[collectionKey]}
      />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
