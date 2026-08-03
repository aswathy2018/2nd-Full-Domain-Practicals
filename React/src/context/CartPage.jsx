import React, { useContext, useState } from 'react'
import { CartContext } from './CartProvider'

export default function CartPage() {
    const {cartItem}=useContext(CartContext)
  return (
    <div>
        <h1>Cart page</h1>
        {cartItem.length===0?(
            <p> cart is empty</p>
        ):(
            cartItem.map((item)=>(
                <div key={item.id}>
                    <h4>{item.title}</h4>
                    <img src={item.image} alt="" width='180' />
                    <h3>{item.price}</h3>
                </div>
            ))
        )}

      
    </div>
  )
}