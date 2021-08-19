import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Aos from 'aos';

const App = () => {
  useEffect(() => {
    Aos.init({ once: true});
    
  },[])
  return (
    <div>
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  );
};

export default App;