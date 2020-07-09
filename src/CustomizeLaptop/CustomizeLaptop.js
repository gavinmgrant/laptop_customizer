import React, { Component } from 'react';
import AllFeatures from './AllFeatures'

class CustomizeLaptop extends Component {    
    render() {
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <AllFeatures
                    features={this.props.features}
                    selected={this.props.selected}
                    handleSelection={this.props.handleSelection}/>
            </form>
        );
    }
}

export default CustomizeLaptop;