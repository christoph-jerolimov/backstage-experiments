import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { npmPlugin, NpmPage } from '../src/plugin';

createDevApp()
  .registerPlugin(npmPlugin)
  .addPage({
    element: <NpmPage />,
    title: 'Root Page',
    path: '/npm',
  })
  .render();
