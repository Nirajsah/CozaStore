import React from 'react'
import Navbar from '@/app/components/Navbar'
import ProductCard from '@/app/components/ProductCard'

type Params = {
  id: string
  category: string
}

export default async function Page({ params }: { params: Params }) {
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div className="lg:w-[1320px] mx-4 my-8">
          <div className="flex mt-16 justify-center flex-col">
            <h1 className="text-5xl mb-9 capitalize font-bold">
              {params.category}
            </h1>
            <ProductCard params={params} />
          </div>
        </div>
      </div>
    </>
  )
}
