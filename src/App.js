import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Jumbotron from './components/utils/jumbotron/jumbotron';

function App() {
  return (
    <div className="App">
      <h1>Hi</h1>
      
      <Jumbotron imageSrc="investing.svg" 
        headingText="Investing Made Simple.." 
        bodyText="Manage your investments the smart way with MProfit">
      </Jumbotron>

    </div>
  );
}

export default App;
