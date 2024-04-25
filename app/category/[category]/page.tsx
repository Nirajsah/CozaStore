'use client'
import Image from 'next/image'
import 'react-intersection-observer'
import Stars from 'react-stars'
import React, { useEffect, useState } from 'react'
import { useCart } from '../../context/CartProvider'
import Link from 'next/link'
import Pagination from '@/app/components/Pagination'
import Navbar from '@/app/components/Navbar'
import { useUser } from '@/app/context/UserProvider'

type Params = {
  id: string
  category: string
}

type Product = {
  categoryId: string
  name: string
  description?: string
  image: string | string[]
  stars: number
  brand?: string
  productId: string
  price: number
}

const ProductCard = ({ data, userId }: { data: any; userId: any }) => {
  const { image, productId } = data
  const addToCartHandler = async () => {
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
      console.log(jsonData)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  return (
    <div className="w-[320px] sm:w-[320px]">
      <div className="w-[300px] border h-[300px] rounded-xl bg-white">
        <Image
          width={300}
          height={300}
          src={image as string}
          className="w-full rounded-xl h-full object-contain"
          alt={data.name}
        />
      </div>
      <div className="mt-3">
        <h5 className="truncate w-[300px] mb-1 font-semibold">{data.name}</h5>
        <div className="mb-1 text-xl font-bold">₹{data.price}</div>
        {/* {data.brand && (
          <div className="mb-1 text-sm uppercase font-bold">{data.brand}</div>
        )} */}
        <div className="flex">
          {
            <Stars
              count={5}
              value={data.stars as number}
              size={15}
              edit={false}
              color1="#cccccc"
              color2="black"
            />
          }
          {data.stars}
        </div>

        <button
          onClick={() => addToCartHandler}
          className="duration-100 bg-black text-white w-[300px] rounded-xl p-4 uppercase font-semibold text-xs mt-3 hover:scale-105"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}
export default function Page({ params }: { params: Params }) {
  const [data, setData] = useState<Product[]>([])
  const [offset, setOffSet] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState(1)
  const { userId } = useUser()

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/category/product', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({ categoryId: params.category, offset }),
        })
        const jsonData = await response.json()
        setData(jsonData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [params.category, offset])

  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div className="lg:w-[1320px] mx-4 my-8">
          <div className="flex mt-16 justify-center flex-col">
            <h1 className="text-5xl mb-9 capitalize font-bold">
              {params.category}
            </h1>
            <div className="grid grid-cols-1 justify-center lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:grid-cols-2">
              {data &&
                data?.map((items: Product) => (
                  <Link
                    href={`/category/${params.category}/${items.productId}`}
                    as={`/category/${params.category}/${items.productId}`}
                    key={items.productId}
                  >
                    <ProductCard data={items} userId={userId} />
                  </Link>
                ))}
            </div>
            <div className="w-full mt-10 p-10 flex items-center justify-center">
              <Pagination
                currentPage={currentPage}
                offset={offset}
                setOffSet={setOffSet}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
