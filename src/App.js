import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Home from './pages/Home'
import Ship from './pages/Ship'
import {Container} from '@material-ui/core'
import './App.sass'

const App = () => {
  return (
    <Container maxWidth="md" className="main-container">
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/ship/:title" component={Ship}></Route>
        <Redirect to="/" />
      </Switch>
    </Container>
  )
}
export default App;
