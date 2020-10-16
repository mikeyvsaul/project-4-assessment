import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector/CircleSelector';
import Circles from './components/Circles/Circles';


const circles = ['1', '2', '3', '4']

class App extends Component {
  constructor() {
    super();
    this.state = {
      current: 0,
      // selected: circles[0]
    }
  }

  // componentDidMount()

  handleClick = (circle) => {
    this.setState({current: circle})
  }

  toggle = idx => {
    let newTodos = [...this.state.todos];
    newTodos[idx].completed = !newTodos[idx].completed;
    this.setState({todos: newTodos});
  }

  updateCurrent = evt => {
    this.setState({current: evt.target.value})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            circles={circles}
            handleClick={this.handleClick}
            current={this.state.current}
            />
          <Circles 
            current={this.state.current}
            circles={circles}
          />
        </main>
      </div>
    );
  }
}

export default App;