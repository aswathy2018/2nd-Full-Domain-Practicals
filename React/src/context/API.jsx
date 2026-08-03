import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from './CartProvider'
import { useNavigate } from 'react-router-dom'


export default function API() {
    const [product,setProduct]=useState([])
    const {addToCart,cartItem}=useContext(CartContext)
    
    const navigate=useNavigate()
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=>res.json())
        .then((data)=>setProduct(data))
    },[])
  return (
    <div>
        <h1>Product page</h1>
        {product.map((item)=>(
            <div key={item.id}>
                <h3>{item.title}</h3>
                <img src={item.image} alt="" width='180' />
                <h3>{item.price}</h3>
                <button
    onClick={() => {
        addToCart(item);
        navigate("/cart");
    }}
>
    Add To Cart
</button>
            </div>
        ))}

    </div>
   
  )
}