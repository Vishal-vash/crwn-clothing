import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import "./shopPage.styles.scss";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collectionPage/collectionPage.component";
import { updateCollections } from "../../redux/shop/shop.actions";
import { firestore, createCollectionsMap } from "../../firebase/firebase.utils";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  state = {
    loading: true,
  };
  unsubscribeCollections = null;

  componentDidMount() {
    const { getUpdateCollections } = this.props;
    const collectionsRef = firestore.collection("collections");
    this.unsubscribeCollections = collectionsRef.onSnapshot(
      async (snapshot) => {
        const collections = createCollectionsMap(snapshot);
        getUpdateCollections(collections);
        this.setState({ loading: false });
      }
    );
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:category`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getUpdateCollections: (collections) =>
    dispatch(updateCollections(collections)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
