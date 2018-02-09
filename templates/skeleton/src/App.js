import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

const App = () => (
  <Admin restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
  </Admin>
);

export default App;
