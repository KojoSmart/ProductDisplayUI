import React from 'react'
import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard';
import axios from 'axios';

const ProductPage = () => {
 const [products, setProducts] = useState([]);
const API = "https://fakestoreapi.com/products";

 useEffect(()=>{
    fetchProducts()
 },[])

 const fetchProducts = async()=>{
    const res = await axios.get("https://fakestoreapi.com/products")
    setProducts(res.data)
 }


 const handleDelete = async(id)=>{
    try {
       await axios.delete(`${API}/${id}`);
       setProducts((prev)=> prev.filter((product)=>product.id !==id))
    } catch (error) {
             console.error("Failed to delete:", err);
 
    }
 }
    return (
    <div>
     <h1 className="text-3xl font-bold text-center mt-4 mb-6">All Products</h1>

      <div className="flex flex-wrap gap-6 justify-center">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  )
}

export default ProductPage
