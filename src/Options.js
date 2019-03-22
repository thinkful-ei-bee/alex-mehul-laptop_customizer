import React, { Component } from 'react';




class Options extends Component {
  
    render() {
      return (
        <li key={this.props.key} className="feature__item">
        <div className={this.props.featureClass}
          onClick={() => this.props.updateFeature(this.props.selected, this.props.item)}>
            { this.props.item.name }
            ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
              .format(this.props.item.cost) })
        </div>
      </li>
  
      );
    }
  }
  
  export default Options;  
  