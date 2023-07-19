import React from 'react';
import Hero from '../../components/hero/hero.component'
import FeaturedItems from '../../components/featured-items/featured-items.component'
import ShopPage from "../shop/shop.component"
import SHOP_DATA from "../shop/shop.data"
//import Directory from '../../components/directory/directory.component';

import { HomePageContainer } from './homepage.styles';

const HomePage = ({SHOP_DATA}) => (
  <HomePageContainer>
	<Hero />
	<FeaturedItems {...SHOP_DATA}/>
	<ShopPage />
    {/* <Directory /> */}
  </HomePageContainer>
);

export default HomePage;