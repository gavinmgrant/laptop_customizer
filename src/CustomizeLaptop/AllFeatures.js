import React, { Component } from 'react';
import FeatureOptions from './FeatureOptions'

class AllFeatures extends Component {
    render() {
        return (
            <FeatureOptions 
                features={this.props.features}
                selected={this.props.selected}
                handleSelection={this.props.handleSelection}/>
        );
    }
};

export default AllFeatures;