import React, { useEffect, useState } from 'react'
import Navbar from '@/app/components/Navbar'
import Image from 'next/image'
import AddToCart from '@/app/components/AddToCart'
import { SessionData } from '@/app/lib'
import { getSession } from '@/app/actions'
import { Product, product } from '@/app/db/schema/schema'
import { db } from '@/app/db/database'
import { eq } from 'drizzle-orm'

type Params = {
  product: string
}

async function getData({
  productId,
}: {
  productId: string
}): Promise<Product[]> {
  const res = await db
    .select()
    .from(product)
    .where(eq(product.productId, productId))
  return res
}

export default async function page({ params }: { params: Params }) {
  const { product: productId } = params
  const session: SessionData = await getSession()
  const [data]: Product[] = await getData({ productId })

  const description =
    'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.'

  return (
    <>
      <Navbar />
      <div className="flex justify-center p-3 mx-3 h-[1024px] relative items-center flex-wrap">
        <div className="w-full px-2 max-w-[1320px] md:p-12 h-full absolute top-[100px] bg-white rounded-xl">
          {data && (
            <div className="w-full h-full flex gap-4 flex-col items-center md:items-start">
              <div className="flex flex-col md:flex-row">
                <div className="w-full max-w-[420px] h-fit rounded-xl">
                  {data && (
                    <Image
                      loading="lazy"
                      width={420}
                      height={420}
                      className="object-contain w-full h-full flex-shrink-0 rounded-xl"
                      src={data.image as string}
                      alt={data.name as string}
                    />
                  )}
                </div>
                <div className="w-full space-y-4">
                  <h1 className="font-semibold text-sm md:text-xl w-fit font-sans">
                    {data.name}
                  </h1>
                  <h3 className="text-2xl flex items-center gap-2 font-semibold">
                    {/* <ReactStars
                      count={5}
                      value={data.stars as number}
                      half={true}
                      edit={false}
                      color2="red"
                    /> */}
                  </h3>
                  {data.price && (
                    <h3 className="text-lg font-semibold">₹ {data.price}</h3>
                  )}
                  <div className="gap-4 max-w-[416px] items-start md:items-center flex-col md:flex-row flex justify-between">
                    <AddToCart data={data} userId={session.userId} />
                    <button className="w-[200px] bg-black text-white py-3 px-3">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>

              <span className="font-semibold text-2xl self-start px-3">
                Description
              </span>
              {description && (
                <div className="w-full px-4 py-3 rounded-xl overflow-scroll h-[300px] bg-white drop-shadow-xl">
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
