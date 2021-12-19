import React, { Component, Suspense } from 'react';
import { SHOP_DATA } from '../../data/shop.data';

/* when state lives in the component, declare the component as class type */
class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const CollectionPreview = React.lazy(() =>
      import('../../components/collection-preview/collection-preview.component')
    );
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        <Suspense fallback={<div>loading...</div>}>
          {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))}
        </Suspense>
      </div>
    );
  }
}

export default Shop;
