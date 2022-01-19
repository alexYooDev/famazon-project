import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
/* when state lives in the component, declare the component as class type */
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionPage from '../collection/collection.component';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;

    const collectionRef = firestore.collection('collections');

    /* whenever this collectionRef gets updated or runs for the first time, 
    send the snapShot representing the code of the collections of the array at the time when this code renders */
    collectionRef.get().then((snapShot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { loading } = this.state;
    return (
      <div className='shop-page'>
        <Routes>
          <Route
            path='/'
            element={
              <CollectionsOverviewWithSpinner
                isLoading={loading}
                {...this.props}
              />
            }
          />
          <Route
            path=':collectionId'
            element={
              <CollectionPageWithSpinner isLoading={loading} {...this.props} />
            }
          />
        </Routes>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
