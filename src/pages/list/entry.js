import React from 'react';
import ReactDOM from 'react-dom';
import Layout from 'components/Layout';
// import DevTools from 'mobx-react-devtools';
import ContactStore from './store';
import ListView from '.';

const contactStore = new ContactStore();
const App = () => (
  <Layout>
    <ListView contactStore={contactStore} />
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
