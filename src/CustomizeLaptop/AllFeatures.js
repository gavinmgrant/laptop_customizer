import React, { Component } from 'react';
import FeatureOptions from './FeatureOptions'

class AllFeatures extends Component {
    render() {
        const allFeatures = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
      
            return (
                <fieldset className="feature" key={featureHash}>
                    <legend className="feature__name">
                        <h3>{feature}</h3>
                    </legend>
                    <FeatureOptions 
                        features={this.props.features}
                        selected={this.props.selected}
                        handleSelection={this.props.handleSelection}/>
                </fieldset>
            );
        });
        
        return allFeatures
    }
};

export default AllFeatures;