import React from 'react';

import "./shopPage.styles.scss";
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

const ShopPage = ({ shopItems }) => (
  <div className="shop-page">
    <CollectionsOverview />
  </div>
);

export default ShopPage;
