import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Layout, Footer, Header } from './shared';
import Home from './screens/Home';
import Legal from './screens/Legal';
import LegalPage from './screens/LegalPage';

const MENU_ITEMS = [
  { label: 'Legal centre', path: 'legal' },
];

function App() {
  return (
    <Layout
      header={<Header
        menuItems={MENU_ITEMS}
      />}
      footer={<Footer />}
    >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/legal">
            <Legal />
          </Route>
          <Route path="/legal/:subPage">
            <LegalPage />
          </Route>
        </Switch>
      </Router>      
    </Layout>
  );
}

export default App;
