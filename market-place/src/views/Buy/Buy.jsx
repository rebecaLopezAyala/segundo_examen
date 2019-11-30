import React, { Component } from 'react';
import  AccordionBootstrap from "../../component/Accordion/Accordion";
import './Buy.css';

class Buy extends Component {
  static propTypes = {
  }

  render() {    
    return (
      <div className="Buy-Wrapper">
          <AccordionBootstrap key = {0}/>
      </div>
    );
  }
}
export default Buy;
