import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.scss';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './screens/Home';
import Legal from './screens/Legal';
import LegalPage from './screens/LegalPage';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
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
      </div>
      <Footer />
    </div>
  );
}

export default App;
