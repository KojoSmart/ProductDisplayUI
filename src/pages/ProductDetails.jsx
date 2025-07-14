import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
const ProductDetails = () =>{
    
    const{id} =useParams(); // get the product ID from URL
    const [product, setProduct] = useState(null); //create a state for the product

    useEffect(()=>{
        const fetchProducts = async()=>{
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(res.data)
        }
        fetchProducts();  // call it when page loads
    }, [id])

 if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    
     <div className="max-w-xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">{product.title}</h1>
      <img src={product.image} alt={product.title} className="w-60 mx-auto mb-4" />
      <p className="mb-2">{product.description}</p>
      <p className="font-semibold">Price: ${product.price}</p>
      <p className="text-gray-600 mb-4">Category: {product.category}</p>
       <Link to="/" className="text-blue-600 underline">Back to Home</Link>
    </div>
  )
}

export default ProductDetails


// useParams(): Gets the ID from the URL like /product/3

// useEffect(): Runs the fetch when the page loads

// fetch(...): Gets the product info from the API

// setProduct(...): Stores the info

// if (!product): Shows "Loading..." while waiting

// Then shows product details and a Back to Home link