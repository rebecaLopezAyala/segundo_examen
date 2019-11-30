import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Product from "../Card/Card";import Carousel from 'react-bootstrap/Carousel'

export default class AccordionBootstrap extends Component {
  static propTypes = {
    key: PropTypes.number
  }

  render() {  
    const { key} = this.props;  
    const data = {
        "title": "Mochila Rosada - Niña",
        "image":"https://tottoelsalvador.vteximg.com.br/arquivos/ids/167485-1000-1000/morral-para-nina-rayol-estampado-2iq_1.jpg?v=636760743661730000",
        "description":"Mochila Rosada para niña, estampada",
        "price":"$7.00",
        "discount":"50%",
        "finalPrice":"$3.50",
        "currency":"usd",
        "button": "comprar"
    }

    return (
    <Accordion defaultActiveKey={key}>
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          Totto
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body>¿<Product data = {data}/><Product data = {data}/><Product data = {data}/></Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="1">
          Siman
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="1">
        <Card.Body><Product data = {data}/></Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="2">
          EPA
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="2">
        <Card.Body><Product data = {data}/></Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
    );
  }
}
