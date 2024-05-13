'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Category } from '../db/schema/schema' // if docker is running
import React from 'react'
import Navbar from '../components/Navbar'

// type CategoryCardProps = {
//   data: Category
// }

const CategoryCard = ({ data }: any) => {
  return (
<<<<<<< HEAD
    <Link as={`/category/${data.id}`} href={`/category/${data.id}`}>
=======
    <Link
      as={`/category/${data.categoryId}`}
      href={`/category/${data.categoryId}`}
    >
>>>>>>> origin/main
      <div className="w-full sm:w-[280px] duration-100 hover:scale-105 transition-all">
        <div className="w-[280px] border rounded-lg h-[280px]">
          <Image
            width={280}
            height={280}
            src={data.image as string}
            priority
            className="rounded-lg object-cover"
            alt=""
          />
        </div>
        <div className="mt-3">
<<<<<<< HEAD
          <div className="text-xl mb-1 capitalize font-semibold">
            {data.name}
          </div>
          <div className="ellipse capitalize text-sm w-[280px] text-slate-500 ">
            {data.description}
          </div>
=======
          <div className="text-xl font-semibold capitalize">{data.name}</div>
          <div className="truncate text-slate-500 ">{data.description}</div>
>>>>>>> origin/main
        </div>
      </div>
    </Link>
  )
}

export default function Page() {
<<<<<<< HEAD
  // const [data, setData] = useState<Category[]>([])

  /* fetch data from api, if docker is running
=======
  const [data, setData] = useState<Category[]>([])

>>>>>>> origin/main
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/category')
        const jsonData = await response.json()
        setData(jsonData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])
<<<<<<< HEAD
  */
  return (
    <div className="flex justify-center">
      <div className="lg:w-[1320px] mt-6">
        <div className="flex mt-6 p-4 justify-center flex-col">
          <h1 className="text-5xl mb-9 font-bold">Category Page</h1>
          <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:grid-cols-2">
            {/*{data &&
              data?.map((category: Category) => (
                <CategoryCard key={category.categoryId} data={category} />
              ))} */}

            {Category?.map((category: Category) => (
              <CategoryCard key={category.id} data={category} />
            ))}
=======

  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div className="lg:w-[1320px] mt-6">
          <div className="flex mt-16 p-4 justify-center flex-col">
            <h1 className="text-5xl mb-9 font-bold">Category Page</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:grid-cols-2">
              {data &&
                data?.map((category: Category) => (
                  <CategoryCard key={category.categoryId} data={category} />
                ))}
            </div>
>>>>>>> origin/main
          </div>
        </div>
      </div>
    </>
  )
}
