import React, { Component } from 'react';
import slugify from 'slugify';

class FeatureOptions extends Component {
    render() {
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        });
        
        const allFeatures = Object.keys(this.props.features).map(feature => {
            const { selected } = this.props;
            const options = this.props.features[feature].map(item => {
                const itemHash = slugify(JSON.stringify(item));
                return (
                    <div key={itemHash} className="feature__item">
                        <input
                            type="radio"
                            id={itemHash}
                            className="feature__option"
                            name={slugify(feature)}
                            checked={item.name === selected[feature].name}
                            onChange={e => this.props.handleSelection(feature, item)}/>
                        <label htmlFor={itemHash} className="feature__label">
                            {item.name} ({USCurrencyFormat.format(item.cost)})
                        </label>
                    </div>
                );
            });

            return options
        });

        return allFeatures
    }
};

export default FeatureOptions;