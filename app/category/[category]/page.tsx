import Image from 'next/image'
import 'react-intersection-observer'
import Stars from '@/app/components/Stars'
import React from 'react'
import { useCart } from '../../context/CartProvider'
import Link from 'next/link'
import Pagination from '@/app/components/Pagination'
import Navbar from '@/app/components/Navbar'
import { useUser } from '@/app/context/UserProvider'
import { product } from '@/app/db/schema/schema'
import { db } from '@/app/db/database'
import { eq } from 'drizzle-orm'
import AddToCart from '@/app/components/AddToCart'

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
  const { image } = data

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
        {/* <Stars count={data.stars} /> */}
        <AddToCart data={data} userId={userId} />
      </div>
    </div>
  )
}
async function getData({ categoryId }: { categoryId: string }): Promise<any[]> {
  const res = await db
    .select()
    .from(product)
    .where(eq(product.categoryId, categoryId))
  return res
}

export default async function Page({ params }: { params: Params }) {
  // const [data, setData] = useState<Product[]>([])
  // const [offset, setOffSet] = useState<number>(0)
  // const [currentPage, setCurrentPage] = useState(1)
  // const { userId } = useUser()

  const data: Product[] = await getData({ categoryId: params.category })
  console.log(data)

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch('/api/category/product', {
  //         method: 'POST',
  //         headers: {
  //           'Content-type': 'application/json',
  //         },
  //         body: JSON.stringify({ categoryId: params.category, offset }),
  //       })
  //       const jsonData = await response.json()
  //       setData(jsonData)
  //     } catch (error) {
  //       console.error('Error fetching data:', error)
  //     }
  //   }
  //   fetchData()
  // }, [params.category, offset])

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
                    <ProductCard data={items} userId={1} />
                  </Link>
                ))}
            </div>
            <div className="w-full mt-10 p-10 flex items-center justify-center">
              {/* <Pagination */}
              {/*   currentPage={currentPage} */}
              {/*   offset={offset} */}
              {/*   setOffSet={setOffSet} */}
              {/*   setCurrentPage={setCurrentPage} */}
              {/* /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
