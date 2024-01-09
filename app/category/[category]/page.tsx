'use client'
import 'react-intersection-observer'
import React, { useEffect, useState } from 'react'
import { useCart } from '../../context/CartProvider'
import Products from '../../db/products.json'
// import Products2 from '@/app/db/output.json'
import ProductList from '../../components/ProductList'
import Pagination from '@/app/components/Pagination'

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

export default function Page({ params }: { params: Params }) {
  // const [data, setData] = useState<Product[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  // Make a request to the server to get the data, if docker is running
  //
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch('/api/category/product', {
  //         method: 'POST',
  //         headers: {
  //           'Content-type': 'application/json',
  //         },
  //         body: JSON.stringify({ categoryId: params.category }),
  //       })
  //       const jsonData = await response.json()
  //       setData(jsonData)
  //     } catch (error) {
  //       console.error('Error fetching data:', error)
  //     }
  //   }
  //
  //   fetchData()
  // }, [params.category])

  const Items: Product[] = Products.filter(
    (item) => item.categoryId === params.category
  )
  const productsPerPage = 9
  const totalProducts = Items.length

  return (
    <div className="flex justify-center">
      <div className="lg:w-[1320px] mx-4 my-8">
        <div className="flex mt-6 justify-center flex-col">
          <h1 className="text-5xl mb-9 capitalize font-bold">
            {params.category}
          </h1>
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
          <div className="w-full flex justify-between">
            <ProductList
              params={params}
              products={Items}
              currentPage={currentPage}
              productsPerPage={productsPerPage}
              totalProducts={totalProducts}
            />
          </div>
          <Pagination
            currentPage={currentPage}
            Items={Items}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  )
}
