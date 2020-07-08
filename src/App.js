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
          name: this.props.features.Processor[0].name,
          cost: this.props.features.Processor[0].cost
        },
        'Operating System': {
          name: this.props.features['Operating System'][0].name,
          cost: this.props.features['Operating System'][0].cost
        },
        'Video Card': {
          name: this.props.features['Video Card'][0].name,
          cost: this.props.features['Video Card'][0].cost
        },
        Display: {
          name: this.props.features.Display[0].name,
          cost: this.props.features.Display[0].cost
        }
      }
    };
  }

  updateSelected = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
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
            handleSelection={this.updateSelected}/>
          <YourCart 
            selected={this.state.selected}/>
        </main>
      </div>
    );
  }
}

export default App;