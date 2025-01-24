import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (isLogin) {
      console.log('Login attempt:', email);
    } else {
      if (!name) {
        setError('Name is required for signup');
        return;
      }
      console.log('Signup attempt:', email, name);
    }
  };

  return (
    <div className="bg-light min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="shadow-lg border-0 rounded-4 overflow-hidden">
              <Row className="g-0">
                {/* Background Image Column */}
                <Col md={6} className="d-none d-md-block">
                  <div
                    className="h-100 bg-cover"
                    style={{
                      backgroundImage: 'url(https://source.unsplash.com/random/800x600?ecommerce)',
                      backgroundPosition: 'center',
                      backgroundSize: 'cover'
                    }}
                  />
                </Col>

                {/* Form Column */}
                <Col md={6}>
                  <Card.Body className="p-5">
                    <div className="text-center mb-4">
                      <h2 className="text-primary fw-bold">
                        {isLogin ? 'Welcome Back' : 'Create Account'}
                      </h2>
                      <p className="text-muted">
                        {isLogin
                          ? 'Sign in to continue to E-Shop'
                          : 'Create an account to get started'}
                      </p>
                    </div>

                    {error && (
                      <Alert variant="danger" className="text-center">
                        {error}
                      </Alert>
                    )}

                    <Form onSubmit={handleSubmit}>
                      {!isLogin && (
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="rounded-pill py-2"
                          />
                        </Form.Group>
                      )}

                      <Form.Group className="mb-3">
                        <Form.Control
                          type="email"
                          placeholder="Email Address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="rounded-pill py-2"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="rounded-pill py-2"
                        />
                      </Form.Group>

                      <Button
                        variant="primary"
                        type="submit"
                        className="w-100 rounded-pill py-2 mb-3"
                      >
                        {isLogin ? 'Login' : 'Sign Up'}
                      </Button>

                      <div className="text-center">
                        <p className="text-muted">
                          {isLogin
                            ? "Don't have an account? "
                            : "Already have an account? "}
                          <Button
                            variant="link"
                            className="p-0"
                            onClick={() => {
                              setIsLogin(!isLogin);
                              setError('');
                            }}
                          >
                            {isLogin ? 'Sign Up' : 'Login'}
                          </Button>
                        </p>
                      </div>
                    </Form>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;