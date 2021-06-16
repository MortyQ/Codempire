import React from 'react';
import './App.css';
import Header from '../header/header'
import Categories from '../categories/categories'
import Jokes from '../jokes/jokes'

function App() {
  return (
      <div className="wrapper">
        <Header />
        <Categories />
        <Jokes />
      </div>
  );
}

export default App;
