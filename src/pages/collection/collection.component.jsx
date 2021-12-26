import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';
import { useParams } from 'react-router-dom';
import { changeShopParams } from '../../redux/shop/shop.actions';
import { useEffect } from 'react';

const CollectionPage = ({ collection, changeParams }) => {
  let params = useParams();

  const { title, items } = collection;

  useEffect(() => {
    changeParams(params.collectionId);
  });
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
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
