import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button, Form, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const products = [
  {
    id: 1,
    name: 'Laptop Pro',
    category: 'Electronics',
    price: 999.99,
    brand: 'TechBrand',
    image: '/placeholder-laptop.jpg'
  },
  {
    id: 2,
    name: 'Gaming Headset',
    category: 'Electronics',
    price: 199.99,
    brand: 'GameSound',
    image: '/placeholder-headphones.jpg'
  },
  {
    id: 3,
    name: 'Wireless Mouse',
    category: 'Electronics',
    price: 49.99,
    brand: 'TechBrand',
    image: '/placeholder-mouse.jpg'
  },
  // More products...
];

const ProductListingPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState({
    brand: '',
    priceRange: ''
  });

  const handleSort = (eventKey) => {
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      switch (eventKey) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        default:
          return 0;
      }
    });
    setFilteredProducts(sortedProducts);
  };

  const handleBrandFilter = (brand) => {
    setFilters({ ...filters, brand });
    const filtered = products.filter(product =>
      brand ? product.brand === brand : true
    );
    setFilteredProducts(filtered);
  };

  const handlePriceFilter = (priceRange) => {
    setFilters({ ...filters, priceRange });
    const filtered = products.filter(product => {
      switch (priceRange) {
        case '0-200':
          return product.price <= 200;
        case '200-500':
          return product.price > 200 && product.price <= 500;
        case '500+':
          return product.price > 500;
        default:
          return true;
      }
    });
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">E-Shop</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <form className="d-flex me-3">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search products..."
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/productlisting">Shop</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin">Admin</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <button className="btn btn-outline-dark btn-lg">
                    <i className="bi bi-cart"></i> Cart
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Container className="mt-4">
        <Row className="mb-4">
          <Col md={3}>
            <h4>Filters</h4>
            <Form.Group className="mb-3">
              <Form.Label>Brand</Form.Label>
              <Form.Select
                onChange={(e) => handleBrandFilter(e.target.value)}
              >
                <option value="">All Brands</option>
                <option value="TechBrand">TechBrand</option>
                <option value="GameSound">GameSound</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price Range</Form.Label>
              <Form.Select
                onChange={(e) => handlePriceFilter(e.target.value)}
              >
                <option value="">All Prices</option>
                <option value="0-200">$0 - $200</option>
                <option value="200-500">$200 - $500</option>
                <option value="500+">$500+</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={9}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2>Electronics</h2>
              <Dropdown onSelect={handleSort}>
                <Dropdown.Toggle variant="outline-secondary">
                  Sort By
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="price-low">
                    Price: Low to High
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="price-high">
                    Price: High to Low
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <Row>
              {filteredProducts.map(product => (
                <Col key={product.id} md={4} className="mb-4">
                  <Card>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>${product.price}</Card.Text>
                      <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductListingPage;