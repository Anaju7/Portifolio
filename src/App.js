import React from 'react';
import './App.css';

import Header from './Components/header';
import { BrowserRouter, Switch, Route } from "react-router-dom";



import Home from './pages/home/index';
import Contato from './pages/Contatos';
import Portifolio from './pages/portifolio';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/portifolio"><Portifolio /></Route>
          <Route path="/contatos"><Contato /> </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;