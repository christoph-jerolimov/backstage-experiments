import React from 'react';
import { Header, Page } from '@backstage/core-components';
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

const defaultConfig = [
  {
    component: 'HomePageStarredEntities',
    x: 0,
    y: 0,
    width: 6,
    height: 6,
    movable: true,
    resizable: true,
    deletable: true,
  },
  {
    component: 'HomePageRecentlyVisited',
    x: 6,
    y: 0,
    width: 6,
    height: 6,
    movable: true,
    resizable: true,
    deletable: true,
  },
  {
    component: 'HomePageTopVisited',
    x: 0,
    y: 6,
    width: 6,
    height: 6,
    movable: true,
    resizable: true,
    deletable: true,
  },
];

export const homePage = (
  <Page themeId="home">
    <Header title={<HomePageCompanyLogo />} />
    <CustomHomepageGrid config={defaultConfig}>
      <WelcomeTitle />
      <HomePageCompanyLogo />
      <HomePageRandomJoke />
      <HomePageTopVisited />
      <HomePageStarredEntities />
      <FeaturedDocsCard filter={{}} />
      <HomePageRecentlyVisited />
    </CustomHomepageGrid>
  </Page>
);
