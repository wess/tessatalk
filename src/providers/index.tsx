import React from 'react';

import SessionProvider from './session';
import PreferencesProvider from './preferences';
import NavProvider from './nav';
import SettingsProvider from './settings';
import ApiProvider from './api';

import {FlashProvider} from './flash';

export {
  FlashProvider,
  SessionProvider
}

const Component = ({children}) => (
  <ApiProvider>
    <SessionProvider>
      <PreferencesProvider>
      <SettingsProvider>
        <NavProvider>
          <FlashProvider>
            {children}
          </FlashProvider>
        </NavProvider>
      </SettingsProvider>
      </PreferencesProvider>
    </SessionProvider>
  </ApiProvider>
);



export default Component;