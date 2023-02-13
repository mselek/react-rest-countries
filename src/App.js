import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path="/about" exact component={About} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  );
};

export default App;