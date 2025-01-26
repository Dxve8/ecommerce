import React, { useState } from "react";
import { Table, Modal, Button, Form } from "react-bootstrap";

const AdminPage = () => {
  const [showProductModal, setShowProductModal] = useState(false);
  const [products, setProducts] = useState([
    { id: 1, name: "Product A", price: "$100", stock: 50 },
    { id: 2, name: "Product B", price: "$200", stock: 30 },
  ]);

  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ]);

  const [orders, setOrders] = useState([
    { id: 1, user: "John Doe", total: "$150", date: "2025-01-20" },
    { id: 2, user: "Jane Smith", total: "$200", date: "2025-01-21" },
  ]);

  const addProduct = (newProduct) => {
    setProducts([...products, { id: products.length + 1, ...newProduct }]);
    setShowProductModal(false);
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-dark text-white vh-100 p-3" style={{ width: "250px" }}>
        <h3 className="text-center">Admin Panel</h3>
        <ul className="nav flex-column mt-4">
          <li className="nav-item">
            <a className="nav-link text-white" href="#dashboard">
              <i className="bi bi-speedometer2 me-2"></i> Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#products">
              <i className="bi bi-box-seam me-2"></i> Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#orders">
              <i className="bi bi-bag me-2"></i> Orders
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#users">
              <i className="bi bi-people me-2"></i> Users
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <span className="navbar-brand">Admin Dashboard</span>
          </div>
        </nav>

        {/* Dashboard Section */}
        <div className="container mt-4">
          <section id="dashboard" className="mb-5">
            <h2>Dashboard</h2>
            <div className="row">
              <div className="col-md-3">
                <div className="card text-center shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">Total Sales</h5>
                    <p className="card-text">$10,000</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card text-center shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">Orders</h5>
                    <p className="card-text">120</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card text-center shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">Users</h5>
                    <p className="card-text">300</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Products Section */}
          <section id="products" className="mb-5">
            <h2>Products</h2>
            <Button
              variant="success"
              className="mb-3"
              onClick={() => setShowProductModal(true)}
            >
              Add Product
            </Button>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Stock</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.stock}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </section>

          {/* Add Product Modal */}
          <Modal
            show={showProductModal}
            onHide={() => setShowProductModal(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add New Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  addProduct({
                    name: formData.get("name"),
                    price: formData.get("price"),
                    stock: formData.get("stock"),
                  });
                }}
              >
                <Form.Group className="mb-3" controlId="productName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control name="name" type="text" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="productPrice">
                  <Form.Label>Price</Form.Label>
                  <Form.Control name="price" type="text" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="productStock">
                  <Form.Label>Stock</Form.Label>
                  <Form.Control name="stock" type="number" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Add Product
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
