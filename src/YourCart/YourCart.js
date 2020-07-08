import React, { Component } from 'react';
import './SumTotal';
import SumTotal from './SumTotal';

class YourCart extends Component {
    render() {
        const { selected } = this.props;
        
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        });

        const summary = Object.keys(selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = selected[feature];
      
            return (
                <div className="summary__option" key={featureHash}>
                    <div className="summary__option__label">{feature}</div>
                    <div className="summary__option__value">{selectedOption.name}</div>
                    <div className="summary__option__cost">
                        {USCurrencyFormat.format(selectedOption.cost)}
                    </div>
                </div>
            );
          });
        
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                    {summary}
                <SumTotal selected={this.props.selected} />
            </section>
        );
    }
}

export default YourCart;