'use client'
import Image from 'next/image'
import 'react-intersection-observer'
import Stars from 'react-stars'
import React, { useEffect, useState } from 'react'
import { useCart } from '../../context/CartProvider'
import Link from 'next/link'
import Products from '../../db/products.json'
// import Products2 from '@/app/db/output.json'
import Previous from '../../assets/previous.png'
import ProductList from '../../components/ProductList'

type Params = {
  id: string
  category: string
}

type ProductCardProps = {
  data: Product
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

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const { addToCart } = useCart()
  const { image } = data
  return (
    <div className="w-full sm:w-[320px]">
      <div className="w-[300px] relative h-[300px]">
        <Image
          width={300}
          height={300}
          src={image as string}
          className="w-full rounded-xl h-full absolute object-contain"
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
          onClick={() => addToCart(data)}
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
  const [currentPage, setCurrentPage] = useState(1)

  // Make a request to the server to get the data, if docker is running

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/category/product', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({ categoryId: params.category }),
        })
        const jsonData = await response.json()
        setData(jsonData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [params.category])

  const Items = Products.filter((item) => item.categoryId === params.category)
  const productsPerPage = 12
  const totalProducts = Items.length

  return (
    <div className="flex justify-center">
      <div className="lg:w-[1320px] mx-4 my-8">
        <div className="flex mt-16 justify-center flex-col">
          <h1 className="text-5xl mb-9 capitalize font-bold">
            {params.category}
          </h1>
          {/* <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:grid-cols-2"> */}
          {/* only if docker is running */}
          {/* {data &&
            data?.map((items: Product) => (
              <Link
                href={`/category/${params.category}/${items.productId}`}
                as={`/category/${params.category}/${items.productId}`}
                key={items.productId}
              >
                <ProductCard data={items} />
              </Link>
            ))} */}
          <ProductList
            params={params}
            products={data}
            currentPage={currentPage}
            productsPerPage={productsPerPage}
            totalProducts={totalProducts}
          />
          {/* {Items &&
              Items?.map((items: Product) => (
                <Link
                  href={`/category/${params.category}/${items.productId}`}
                  as={`/category/${params.category}/${items.productId}`}
                  key={items.productId}
                >
                  <ProductCard data={items} />
                </Link>
              ))} */}
          <div className="flex items-center self-center justify-between mt-12 w-[170px]">
            <button
              className="border-2 border-black flex justify-center rounded-full p-2"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <Image src={Previous} width={20} height={20} alt="" />
            </button>
            <span className="text-lg"> {currentPage} </span>
            <button
              className="border-2 border-black flex justify-center rounded-full p-2"
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(prev + 1, Math.ceil(totalProducts / productsPerPage))
                )
              }
              disabled={
                currentPage === Math.ceil(totalProducts / productsPerPage)
              }
            >
              <Image
                style={{ transform: 'rotate(180deg)' }}
                src={Previous}
                width={20}
                height={20}
                alt=""
              />
            </button>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}
