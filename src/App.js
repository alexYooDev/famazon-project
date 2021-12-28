import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import {
  auth,
  createUserProfileDocument,
  addCollectionAndDocuments,
} from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';
import PrivateRoute from './private-route.component';
import { selectCurrentUser } from './redux/user/user.selectors';
import { CollectionsOverview } from './components/collections-overview/collections-overview.component';
import { selectCollectionsForPreview } from './redux/shop/shop.selectors';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
      addCollectionAndDocuments('collections', collectionsArray);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='shop/*' exact element={<ShopPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route
            path='/sign-in'
            element={
              <PrivateRoute signedInUser={this.props.currentUser}>
                <SignInAndSignUp />
              </PrivateRoute>
            }
          />
        </Routes>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
