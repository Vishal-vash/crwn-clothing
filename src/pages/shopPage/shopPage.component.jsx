import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import "./shopPage.styles.scss";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collectionPage/collectionPage.container";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

class ShopPage extends Component {
  componentDidMount() {
    this.props.fetchCollections();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:category`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
