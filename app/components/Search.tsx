import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import products from '../db/products.json'
import Image from 'next/image'
import Link from 'next/link'

export default function Search() {
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = (event: any) => {
    const value = event.target.value.toLowerCase()
    const results: any = products.filter((product) =>
      product.name.toLowerCase().includes(value)
    )
    setSearchResults(results)
    if (value === '') {
      setSearchResults([])
    }
  }

  return (
    <div className="fixed top-[100px] overflow-scroll z-10 rounded-xl bg-white w-full max-w-[620px] h-[420px]">
      <div className="flex border-b px-4 h-[60px] items-center">
        <BsSearch />
        <input
          placeholder="Search Products"
          className="ml-4 w-full h-full focus:outline-none"
          onChange={handleSearch}
        />
      </div>
      <div className="mx-3 my-2">
        {searchResults &&
          searchResults?.map((product: any, index) => (
            <Link
              href={`/category/${product.categoryId}/${product.productId}`}
              key={index}
            >
              <div className="flex mt-3 items-center h-[60px] rounded-xl bg-white drop-shadow-md">
                <Image
                  width={50}
                  height={50}
                  alt={product.name}
                  src={product.image}
                  className="p-2"
                />
                <h2 className="truncate bg-white text-sm font-medium py-2">
                  {product.name}
                </h2>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}
