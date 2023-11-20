'use client'
import React, { createContext, ReactNode, useContext, useState } from 'react'

export const CartContext = createContext<any>(null)
interface ProductTypes {
  categoryId: string
  name: string
  image: string
  stars: number
  productId: string
  price_string: string
  price_symbol: string
  price: number
  quantity: number
}
export default function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<ProductTypes[]>([])
  const addToCart = (product: ProductTypes) => {
    const itemInCart = cart.find(
      (item: ProductTypes) => item.productId === product.productId
    )

    if (itemInCart) {
      itemInCart.quantity++
      setCart([...cart])
    } else {
      const newItem = { ...product, quantity: 1 }
      setCart([...cart, newItem])
    }
  }
  const decrementQuantity = (product: ProductTypes) => {
    const item = cart.find(
      (item: ProductTypes) => item.productId === product.productId
    )
    if (item) {
      if (item.quantity > 1) {
        item.quantity--
        setCart([...cart])
      } else {
        item.quantity = 1
      }
    } else {
      return null
    }
  }

  const incrementQuantity = (product: ProductTypes) => {
    const item = cart.find(
      (item: ProductTypes) => item.productId === product.productId
    )
    if (item) {
      item.quantity++
      setCart([...cart])
    } else return null
  }

  const removeItem = (product: ProductTypes) => {
    const removeItem = cart.filter(
      (item: ProductTypes) => item.productId !== product.productId
    )
    setCart(removeItem)
  }
  const totalCartPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const totalItems = () => {
    let uniqueItems = new Set(cart.map((item) => item.productId))
    return uniqueItems.size
  }

  const contextValue = {
    cart,
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeItem,
    totalCartPrice,
    totalItems,
  }
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}
