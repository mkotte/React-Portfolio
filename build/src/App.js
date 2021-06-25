import React from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import Work from './pages/Work.js'
import './App.css';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      <Header />
        <Router>
          <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          </Switch>
        </Router>  
      <Footer />
    </div>
  );
};

export default App;