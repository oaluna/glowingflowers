import React from "react";
import Hero from "../../components/hero/hero.component";
import FeaturedItems from "../../components/featured-items/featured-items.component";
import Directory from "../../components/directory/directory.component";

import { HomePageContainer } from "./homepage.styles";

const HomePage = () => (
  <HomePageContainer>
    <Hero />
    <FeaturedItems />
    <Directory />
  </HomePageContainer>
);

export default HomePage;
