/* import { useState } from 'react'
import logo from './logo.svg' */
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css'
import Home from './page/Home/Home';
import Detail from './components/cards-products/Detail'
function App() {
  

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/:id' component={Detail} />
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
    
  )
}

export default App

/* <BrowserRouter>
      <Switch>
        <Route exact path='/:id' component={Detail} />
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter> 
    
    < Home />*/