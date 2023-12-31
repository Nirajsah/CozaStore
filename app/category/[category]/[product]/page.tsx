'use client'

import React, { useEffect, useState } from 'react'
import Products from '../../../db/products.json'
import ReactStars from 'react-stars'
import { useCart } from '../../../context/CartProvider'

type Params = {
  product: string
}
type Product = {
  categoryId: string
  name: string
  image: string
  stars: number
  productId: string
  price_string: string
  price_symbol: string
  price: number
}

export default function page({ params }: { params: Params }) {
  const { product } = params
  // const [item, setItem] = useState<Product>()
  // useEffect(() => {
  //   async function fetchItem() {
  //     try {
  //       const response = await fetch("/api/product");
  //       const jsonData = await response.json();
  //       setItem(jsonData);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }
  //
  //   fetchData();
  // }, []);

  const item = Products.filter((Item) => Item.productId === product)
  // const getProduct = async () => {
  //   try {
  //   } catch (error) {
  //
  //   }
  // }
  const { image, name, stars, price, price_symbol } = item[0]
  const { addToCart } = useCart()
  return (
    <div className="flex justify-center p-3 mx-3 h-screen relative items-center">
      <div className="w-full max-w-[1320px] md:p-12 h-[800px] absolute top-[100px] bg-white rounded-xl ">
        <div className="w-full h-full flex gap-4 flex-col md:flex-row items-center md:items-start">
          <div className="w-full max-w-[420px] h-fit rounded-xl">
            <img
              loading="lazy"
              className="object-contain rounded-xl"
              src={image as string}
            />
          </div>
          <div className="p-4 w-full space-y-4">
            <h1 className="font-semibold text-xl w-fit font-sans">{name}</h1>
            <h3 className="text-2xl flex items-center gap-2 font-semibold">
              <ReactStars
                count={5}
                value={stars}
                half={true}
                edit={false}
                color2="red"
              />
              <p className="text-[18px]">{stars}</p>
            </h3>
            <h3 className="text-xl font-fira">
              {price_symbol}
              {price}
            </h3>
            <div className="gap-4 max-w-[320px] flex justify-between">
              <button
                onClick={() => addToCart(item[0])}
                className="w-full border border-black rounded-xl px-3 py-2"
              >
                Add to Cart
              </button>
              <button className="w-full border bg-black text-white rounded-xl px-3 py-2">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
