import React, { Component } from 'react';
import SumTotal from './SumTotal';
import Summary from './Summary';

class YourCart extends Component {
    render() {
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <Summary selected={this.props.selected} />
                <SumTotal selected={this.props.selected} />
            </section>
        );
    }
}

export default YourCart;