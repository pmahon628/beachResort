import React from 'react';
import './App.css';

import Home from './pages/home'
import Rooms from './pages/rooms'
import SingleRoom from './pages/singleRoom'
import Error from './pages/Error'

import {Route, Switch} from 'react-router-dom'

import Navbar from "./components/Navbar";


function App(){
    return (
        <>
        <Navbar />
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
        </Switch>
      </>
    );
}
export default App;
