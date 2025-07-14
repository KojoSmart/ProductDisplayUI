import React from "react";
import { Link } from "react-router-dom";
const ProductCard = ({ product, onDelete }) => {
  return (
    <div>
      <div className="border rounded-lg shadow p-4 w-64 hover:shadow-lg">
        <img
          src={product.image}
          alt={product.title}
          className="h-40 mx-auto object-contain mb-2"
        />
        <h3 className="font-semibold text-sm mb-1">{product.title}</h3>
        <p className="text-blue-600 font-bold mb-2">${product.price}</p>
        <Link
          to={`/product/${product.id}`}
          className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          View Details
        </Link>

         {/* Delete Button */}
      <button
        onClick={() => onDelete(product.id)}
        className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Delete
      </button>
      </div>
    </div>
  );
};

export default ProductCard;
