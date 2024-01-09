import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import products from '../db/products.json'

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
      <div className="mx-6 my-2">
        {searchResults &&
          searchResults?.map((product: any, index) => (
            <div key={index}>
              <h2 className="truncate py-2">{product.name}</h2>
            </div>
          ))}
        <div className="text-center mt-5 text-[#9ca3af] text-xl font-bold">
          Just a ProtoType
        </div>
      </div>
    </div>
  )
}
