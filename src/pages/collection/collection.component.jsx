import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import collectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';
import { useParams } from 'react-router-dom';
import { changeShopParams } from '../../redux/shop/shop.actions';
import { useEffect } from 'react';

const CollectionPage = ({ collection, changeParams }) => {
  let params = useParams();

  console.log(collection);

  useEffect(() => {
    changeParams(params.collectionId);
  });
  // let params = useParams();

  // const collection = useSelector(selectCollections(params.categoryId));

  // console.log(collection);
  return (
    <div className='collection'>
      <h2>COLLECTION PAGE</h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    collection: selectCollection(state.shop.params)(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeParams: (param) => dispatch(changeShopParams(param)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage);
