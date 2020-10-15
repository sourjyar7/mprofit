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
     isSimple={true}
     headingText="Try MProfit for free !"
    
     buttonText="Sign Up Now -->"
    >
    </HorizontalJumbotron>
     
      

    </div>
  );
}

export default App;
