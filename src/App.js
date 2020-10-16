import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from './components/utils/jumbotron/jumbotron';
import HorizontalJumbotron from './components/utils/jumbotronHorizontal/jumbotronHorizontal';
import TabItem from './components/utils/tabItem/tabItem';
import Card from './components/utils/card/card';
import Footer from './components/utils/footer/footer';

function App() {
  const card1={ imageSrc: "researching.svg",titleText:"But now is the time to invest"};
  const card2={ imageSrc: "researching.svg",titleText:"But now"};
  const card3={ imageSrc: "researching.svg",titleText:"But now"};
  return (
    <div className="App">
     
      
    <Footer></Footer>
     
      

    </div>
  );
}

export default App;
