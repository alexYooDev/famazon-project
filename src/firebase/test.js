import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firestore = firebase.firestore();

firestore
  .collection('users')
  .doc('dEDjbMDiTarmnucwau9O')
  .collection('cart')
  .doc('lmQmuQqgEgFfSXE2t9F2');

firestore.doc('/users/dEDjbMDiTarmnucwau9O/cart/lmQmuQqgEgFfSXE2t9F2');

firestore.collection('/users/dEDjbMDiTarmnucwau9O/cart/lmQmuQqgEgFfSXE2t9F2');
