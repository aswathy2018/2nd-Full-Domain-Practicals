import React, { createContext, useState } from 'react'
export const CartContext=createContext(null)

export default function CartProvider({children}) {
    const [cartItem,setCartItem]=useState([])

    function addToCart(product){
        setCartItem((prev)=>[...prev,product])
    }
  return (
        <CartContext.Provider value={{cartItem,setCartItem,addToCart}}>
            {children}
        </CartContext.Provider>
  )
}