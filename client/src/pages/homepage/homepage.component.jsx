import React from 'react';
import Hero from '../../components/hero/hero.component'
import ShopPage from "../shop/shop.component"
//import Directory from '../../components/directory/directory.component';

import { HomePageContainer } from './homepage.styles';

const HomePage = () => (
  <HomePageContainer>
	<Hero />
	<ShopPage />
    {/* <Directory /> */}
  </HomePageContainer>
);

export default HomePage;