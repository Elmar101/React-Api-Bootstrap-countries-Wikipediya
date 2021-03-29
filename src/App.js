import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import LogButton from './components/LogButton';
import CountriesList from './components/CountriesList';
import Country from './components/Country';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
function App() {
  const about = LogButton(About);
  return (  
    <>
      <BrowserRouter>
        <div className="container">
          <Route path="/" component={Navbar} />
        </div>
        
        <div className="container mt-2">
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={ about } />
            <Route path="/contact" component={ LogButton(Contact) } />
            <Route path="/country" component={ CountriesList } />
            <Route path="/:id" component={Country} exact/>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
