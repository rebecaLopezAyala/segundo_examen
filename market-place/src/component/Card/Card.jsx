import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class Product extends Component {
  static propTypes = {
    img: PropTypes.number,
    data: PropTypes.object,
  }

  render() {  
    const { img, data} = this.props;  
    return data && (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={data.image} />
    <Card.Body>
      <Card.Title>{data.title}</Card.Title>
    <Card.Text>{data.description}</Card.Text>
    <Button variant="primary">{data.button}</Button>
    </Card.Body>
  </Card>
    );
  }
}
