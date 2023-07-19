import { useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import SHOP_DATA from './shop.data.js';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const ShopPage = ({ fetchCollectionsStart, match }) =>{
  const [collections, setCollections] = useState(SHOP_DATA);
	const { path } = useParams()

    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
				<Routes>
        <Route
          exact
          path={`${path}`}
          element={<CollectionsOverviewContainer/>}
        />
        <Route
          path={`${path}/:collectionId`}
          element={<CollectionPageContainer />}
        />
				</Routes>
      </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
