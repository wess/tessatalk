import React from 'react';

import {
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';

import {
  useNav,
  useSession,
} from '~/providers/hooks';

import {
  Landing,
  Chat
} from '~/pages';

const Component = () => {
  const location = useLocation();
  const {session} = useSession();

  const Destination = session == null ? Landing : Chat;

  return (
    <Routes>
      <Route path="/*" element={<Destination/>}/>
    </Routes>
  );
}

export default Component;