import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Aos from 'aos';
import 'aos/dist/aos.css'

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200
    });
    
  },[])
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