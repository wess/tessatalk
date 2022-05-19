import React from 'react';

import {
  Link,
  useLocation, 
  useNavigate,
} from "react-router-dom";

import {
  useSession,
  useFlash,
  useSettings,
} from '~/providers/hooks';


const Component = () => {
  const navigate = useNavigate();
  const {session, setSession} = useSession();
  const {settings, setSettings} = useSettings();
  const {setFlash} = useFlash();

  return (
    <div>Nav</div>
  );
}

export default Component;
