import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const products = [
  {
    id: 1,
    name: 'Laptop Pro',
    price: 999.99,
    image: '/placeholder-laptop.jpg',
    description: 'High-performance laptop for professionals'
  },
  {
    id: 2,
    name: 'Wireless Headphones',
    price: 199.99,
    image: '/placeholder-headphones.jpg',
    description: 'Noise-cancelling over-ear headphones'
  },
  // Add more products
];

const SearchResultsPage = () => {
  const [sortBy, setSortBy] = useState('relevance');

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    switch(sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return (
    <Container className="mt-4">
      <Row className="mb-4">
        <Col md={8}>
          <h2>Search Results for "Laptop"</h2>
          <p>{products.length} products found</p>
        </Col>
        <Col md={4}>
          <Form.Select onChange={handleSortChange} value={sortBy}>
            <option value="relevance">Sort by Relevance</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </Form.Select>
        </Col>
      </Row>
      <Row>
        {sortedProducts.map(product => (
          <Col key={product.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text className="fw-bold">${product.price}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SearchResultsPage;