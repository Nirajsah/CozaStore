'use client'
import React from 'react'
import { Product } from '../db/schema/schema'
import Link from 'next/link'
import Pagination from './Pagination'
import Image from 'next/image'
import AddToCart from './AddToCart'

type Params = {
  id: string
  category: string
}

const Products = ({
  data,
  userId,
  params,
}: {
  data: any
  userId: any
  params: any
}) => {
  const { image } = data
  return (
    <div>
      <Link
        href={`/category/${params.category}/${data.productId}`}
        as={`/category/${params.category}/${data.productId}`}
      >
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
            <h5 className="truncate w-[300px] mb-1 font-semibold">
              {data.name}
            </h5>
            <div className="mb-1 text-xl font-bold">₹{data.price}</div>
          </div>
        </div>
      </Link>
      <AddToCart data={data} userId={userId} />
    </div>
  )
}

export default function ProductCard({ params }: { params: Params }) {
  const [data, setData] = React.useState<Product[]>([])
  const [offset, setOffSet] = React.useState<number>(0)
  const [currentPage, setCurrentPage] = React.useState(1)

  React.useEffect(() => {
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

  const Skeleton = () => {
    return (
      <div>
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    )
  }
  return (
    <div>
      <div className="grid grid-cols-1 justify-center lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:grid-cols-2">
        {data &&
          data?.map((items: Product) => (
            <Products data={items} userId={1} params={params} />
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
  )
}
