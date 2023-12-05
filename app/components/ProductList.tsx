import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '../context/CartProvider'
import Stars from 'react-stars'

interface Product {
  categoryId: string
  name: string
  description?: string
  image: string | string[]
  stars: number
  brand?: string
  productId: string
  price: number
}
type ProductCardProps = {
  data: Product
}

interface ProductListProps {
  params: { id: any; category: any }
  products: Product[]
  currentPage: number
  productsPerPage: number
  totalProducts: number
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
        <div className="mb-1 text-sm font-bold">₹{data.price}</div>
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
const ProductList: React.FC<ProductListProps> = ({
  params,
  products,
  currentPage,
  productsPerPage,
  totalProducts,
}) => {
  const startIndex = (currentPage - 1) * productsPerPage
  const endIndex = startIndex + productsPerPage
  const currentProducts = products.slice(startIndex, endIndex)
  return (
    <div className="lg:w-[1320px] grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-4 my-8">
      {currentProducts &&
        currentProducts?.map((items: Product) => (
          <Link
            href={`/category/${params.category}/${items.productId}`}
            as={`/category/${params.category}/${items.productId}`}
            key={items.productId}
          >
            <ProductCard data={items} />
          </Link>
        ))}
      {/* {currentProducts.map((product: Product) => (
          <li key={product.productId}>{product.name}</li>
        ))} */}
    </div>
  )
}

export default ProductList
