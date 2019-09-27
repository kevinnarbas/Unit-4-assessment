import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector/CircleSelector'
import Circles from './components/Circles/Circles'

const selects = [0, 1, 2, 3]

class App extends Component {
  constructor() {
    super ()
    this.state = {
      selected: 0
    }
  }
  
  handleClick = (idx) => this.setState({selected: idx})

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector 
            selects={selects}
            selButton={this.state.selected}
            handleClick={this.handleClick}
          />
          <Circles
            selects={selects}
            selCircle={this.state.selected}
          />
        </main>
      </div>
    );
  }
}

export default App;