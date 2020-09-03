import React from 'react';
import FirstScreen from './components/firstScreen/index';
import NavBar from './components/navbar';
import Table from './components/secondScreen/index';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.scss';


function App() {
  return (
    <Router>
        <div className="main">
          <div className='container'>
            <Route path="/" component={NavBar} />
            <Route exact path = "/firstScreen" component={FirstScreen} />
            <Route path = "/secondScreen" component={Table} />
          </div>
        </div >
    </Router>
  );
}

export default App;