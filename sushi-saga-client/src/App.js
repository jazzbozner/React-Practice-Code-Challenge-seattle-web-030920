import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
 
  state = {
    sushi: [],
    currentSushi: [],
    emptyPlates: [],
    wallet: 300
  }

  componentDidMount() {
    this.fetchSuchi()
  }

  fetchSuchi = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => {this.setState({sushi: data}), this.getNextSushi()})
  }

  getNextSushi = () => {
    this.setState({
      sushi: this.state.sushi.slice(4),
      currentSushi: this.state.sushi.slice(0,4)
    })
  }

  eatSushi = (sushi) => {
    if (sushi.price <= this.state.wallet && !this.isSushiEaten(sushi))
    this.setState(prev => {
      return {emptyPlates: [...prev.emptyPlates, sushi], wallet: prev.wallet-sushi.price}
    })
  }

  isSushiEaten = (sushi) => {
    return this.state.emptyPlates.includes(sushi)
  }
 
  render() {
    return (
      <div className="app">
        <SushiContainer 
          currentSushi={this.state.currentSushi} 
          onEatSushi={this.eatSushi} 
          isSushiEaten={this.isSushiEaten}
          onGetNextSushi={this.getNextSushi}
        />
        <Table 
          wallet={this.state.wallet}
          emptyPlates={this.state.emptyPlates}
        />
      </div>
    );
  }
}

export default App;