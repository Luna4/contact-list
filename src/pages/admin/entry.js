import React from 'react';
import ReactDOM from 'react-dom';
import Layout from 'components/Layout';
import Store from './store';
import AdminView from '.';

const store = new Store();
const App = () => (
  <Layout>
    <AdminView store={store} />
  </Layout>
);

const dom = document.getElementById('app');

ReactDOM.render(
  <App />,
  dom
);

if (module.hot) {
  module.hot.accept();
}
