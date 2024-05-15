import React from 'react';
import {
  CustomHomepageGrid,
  WelcomeTitle,
  HomePageCompanyLogo,
  HomePageRandomJoke,
  HomePageTopVisited,
  HomePageStarredEntities,
  FeaturedDocsCard,
  HomePageRecentlyVisited,
} from '@backstage/plugin-home';

export const homePage = (
  <CustomHomepageGrid>
    <WelcomeTitle />
    <HomePageCompanyLogo />
    <HomePageRandomJoke />
    <HomePageTopVisited />
    <HomePageStarredEntities />
    <FeaturedDocsCard filter={{}} />
    <HomePageRecentlyVisited />
  </CustomHomepageGrid>
);
