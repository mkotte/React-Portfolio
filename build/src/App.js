import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import Work from './pages/Work.js'
import NoMatch from './pages/NoMatch.js'
import './App.css';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Work />
      {/* <Home /> */}
        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/work" component={Work} />
          <Route component={NoMatch} />
        </Switch> */}
      <Footer />
    </div>
  );
};

export default App;