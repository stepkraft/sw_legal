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

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Router>
          <Switch>
            <Route path="/legal">
              <Legal />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
