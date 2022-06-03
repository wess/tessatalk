import React from 'react';
import {createRoot} from 'react-dom/client';

import {
  BrowserRouter,
} from 'react-router-dom';

import {
  ChakraProvider,
  ColorModeScript,  
} from '@chakra-ui/react';

import {Theme} from '~/theme';

import {
  Global,
  css,
} from '@emotion/react';

import Provider from '~/providers';
import Router from './router';
import Layout from './layouts';

export const cssFixes = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
     outline: none;
     box-shadow: none;
   }
`;

createRoot(document.getElementsByTagName('main')[0]).render(
  <BrowserRouter>
    <ColorModeScript initialColorMode={Theme.config.initialColorMode}/>
    <ChakraProvider theme={Theme}>
      <Global styles={cssFixes}/>
      <Provider>
        <Layout>
          <Router/>
        </Layout>
      </Provider>
    </ChakraProvider>
  </BrowserRouter>
);

