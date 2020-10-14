import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from './components/utils/jumbotron/jumbotron';
import HorizontalJumbotron from './components/utils/jumbotronHorizontal/jumbotronHorizontal';
import TabItem from './components/utils/tabItem/tabItem';
import Card from './components/utils/card/card';

function App() {
  return (
    <div className="App">
     
      
    <HorizontalJumbotron 
     headingText="A Complete Portfolio Management Solution"
     bodyText="Powered by an intuitive interface on Web, MProfit lets you maintain multi-asset investment portfolios and automates import of data"
    >
    </HorizontalJumbotron>
     
      

    </div>
  );
}

export default App;
