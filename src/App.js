import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import './styles/normalize.css';
import Register from './pages/Register/Register';


class App extends Component {
render() {
    return (
      <div className="App">
      <Route path='/' component={Register}/>
      
      </div>
    );
  }
}

export default App;
