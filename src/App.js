import React, { Component } from 'react';
import './App.css';
import CustomizeLaptop from './CustomizeLaptop/CustomizeLaptop';
import YourCart from './YourCart/YourCart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {
        Processor: {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        'Operating System': {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        'Video Card': {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
    };
  }

  updateSelected = (feature, newValue) => {
    const selected = Object.assign({}, this.props.handleSelection());
    selected[feature] = newValue;
    this.setState({
        selected
    });
};

  render() {
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <CustomizeLaptop 
            features={this.props.features}
            selected={this.state.selected}
            handleSelection={e => this.updateSelected(e)}/>
          <YourCart 
            selected={this.state.selected}/>
        </main>
      </div>
    );
  }
}

export default App;