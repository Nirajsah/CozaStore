'use client'

import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'
import Navbar from '@/app/components/Navbar'
import { useUser } from '@/app/context/UserProvider'
import Image from 'next/image'

type Params = {
  product: string
}

export default function page({ params }: { params: Params }) {
  const { product: productId } = params
  const [data, setData] = useState()
  const { userId } = useUser()

  const addToCartHandler = async ({ productId }: { productId: string }) => {
    try {
      const response = await fetch('/api/cart/add', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          productId,
          quantity: 1,
          userId,
        }),
      })
      const jsonData = await response.json()
      return jsonData
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    async function fetchItem() {
      try {
        const response = await fetch('/api/category/product/single', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            productId,
          }),
        })
        const jsonData = await response.json()
        setData(jsonData.result[0])
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchItem()
  }, [productId])

  const { name, stars, price, image }: any = data || {}

  const description =
    'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.'

  return (
    <>
      <Navbar />
      <div className="flex justify-center p-3 mx-3 h-[800px] relative items-center flex-wrap">
        <div className="w-full max-w-[1320px] md:p-12 h-full absolute top-[100px] bg-white rounded-xl">
          {data && (
            <div className="w-full h-full flex gap-4 flex-col items-center md:items-start">
              <div className="flex">
                <div className="w-full max-w-[420px] h-fit rounded-xl">
                  <Image
                    loading="lazy"
                    width={420}
                    height={420}
                    className="object-contain w-full h-full flex-shrink-0 rounded-xl"
                    src={image}
                    alt={name}
                  />
                </div>
                <div className="p-4 w-full space-y-4">
                  <h1 className="font-semibold text-xl w-fit font-sans">
                    {name}
                  </h1>
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
                  {price && (
                    <h3 className="text-lg font-semibold">₹ {price}</h3>
                  )}
                  <div className="gap-4 max-w-[320px] flex justify-between">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        addToCartHandler({ productId: productId })
                      }}
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

              <span className="font-semibold text-2xl px-3">Description</span>
              {description && (
                <div className="w-full px-4 py-3 rounded-xl overflow-scroll h-[500px] bg-white drop-shadow-xl">
                  {description}{' '}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
