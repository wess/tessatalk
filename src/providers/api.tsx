import React from 'react';
import {Appwrite} from 'appwrite';

const PROJECT_ID = process.env['PROJECT_ID'];
const ENDPOINT = process.env['ENDPOINT'];

const client = new Appwrite();
client.setEndpoint(ENDPOINT)
      .setProject(PROJECT_ID);

const Context = React.createContext(client);

const Component = ({children}) => (
  <Context.Provider value={client}>{children}</Context.Provider>
);

export const useApi = () => React.useContext(Context);

export default Component;