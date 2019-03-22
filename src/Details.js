import React, { Component } from 'react';
import Options from './Options'




class Details extends Component {
    
    render() {
      const features = Object.keys(this.props.features)
            .map(key => {
              const options = this.props.features[key].map((item, index) => {
                const selectedClass = item.name === this.props.selected[key].name ? 'feature__selected' : '';
                const featureClass = 'feature__option ' + selectedClass;
                return <Options key ={index} featureClass = {featureClass} item = {item} selected={key} updateFeature ={this.props.updateFeature}/>
            });

            return <div className="feature" key={key}>
              <div className="feature__name">{key}</div>
              <ul className="feature__list">
                { options }
              </ul>
            </div>
          });    
          
      return (
        <section className="main__form">
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
        { features }
      </section>
      );
    }
  }
  
  export default Details;  
  