import React, { Component } from 'react';
import SummaryItem from './Summary_Item'



class Summary extends Component {
  
    
  
    render() {
        const summary = Object.keys(this.props.state.selected)
        .map(key => {
           return <SummaryItem key = {key} name={this.props.state.selected[key].name} cost = {this.props.state.selected[key].cost} />
             })

      return summary;
    }
  }
  
  export default Summary;  
  