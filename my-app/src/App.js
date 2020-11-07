import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter.jsx'

class App extends React.Component{
  render(){
    return(
      <div>

          <h1>Three counter buttons stopping at 0</h1>
          <Counter></Counter>
          <Counter></Counter>
          <Counter></Counter>
      </div>
    )
  }
}

export default App;
