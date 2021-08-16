import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
     {/* <Home/> */}
    </div>
  );
};

export default App;