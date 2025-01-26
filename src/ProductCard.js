import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
        style={{ height: "250px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">₹{product.price}</p>
        <button className="btn btn-outline-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
