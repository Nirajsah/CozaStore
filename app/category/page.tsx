import Image from 'next/image'
import Link from 'next/link'
import { Category, category } from '../db/schema/schema' // if docker is running
import React from 'react'
import Navbar from '../components/Navbar'
import { db } from '../db/database'

const CategoryCard = ({ data }: { data: Category }) => {
  return (
    <Link
      as={`/category/${data.categoryId}`}
      href={`/category/${data.categoryId}`}
    >
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
          <div className="text-xl font-semibold capitalize">{data.name}</div>
          <div className="truncate text-slate-500 ">{data.description}</div>
        </div>
      </div>
    </Link>
  )
}

async function getData(): Promise<Category[]> {
  const res = await db.select().from(category)
  return res
}

export default async function Page() {
  const data: Category[] = await getData()
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
          </div>
        </div>
      </div>
    </>
  )
}
