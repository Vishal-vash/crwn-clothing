import React from 'react';
import { Route } from 'react-router-dom';

import './shopPage.styles.scss';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collectionPage/collectionPage.component';

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:category`} component={CollectionPage} />
  </div>
);

export default ShopPage;
