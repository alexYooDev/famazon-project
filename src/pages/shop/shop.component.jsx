import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

/* when state lives in the component, declare the component as class type */
const ShopPage = ({ collections }) => {
  return (
    <div className='shop-page'>
      <CollectionsOverview />
    </div>
  );
};

export default ShopPage;
