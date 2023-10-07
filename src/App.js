import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Books from './components/Books';
import Authors from './components/Authors';
import BookDetails from './components/BookDetails';
import ShoppingCart from './components/ShoppingCart';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        {/* asd */}
        <Switch>
          <Route path="/" exact component={Home} />
         <Route path="/books" component={Books} />
          <Route path="/authors" component={Authors} />
          <Route path="/book/:id" component={BookDetails} />
          <Route path="/cart" component={ShoppingCart} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;