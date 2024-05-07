'use client'
import Image from 'next/image'
import 'react-intersection-observer'
import Stars from 'react-stars'
import React, { useEffect, useState } from 'react'
import Pagination from '@/app/components/Pagination'
import { useRouter, useParams } from 'next/navigation'

type Params = {
  id: string
  category: string
}

type ProductCardProps = {
  data: Product
}

type Product = {
  categoryId: string
  name: string
  image: string | string[]
  stars: number
  productId: string
  price: string
}

const UpdateProductForm = ({ item, setShowUpdateProductForm }: any) => {
  const router = useRouter()
  const params = useParams()
  const { stars, categoryId, productId, name, price, image } = item
  const [newImage, setNewImage] = React.useState<File | null>(null)
  const [spinner, setSpinner] = React.useState<File | null>(null)
  const [product, setProduct] = useState({
    categoryId,
    productId,
    name,
    price,
    stars,
    image,
  })

  async function deleteProduct({ productId }: any) {
    try {
      if (productId === '') {
        return
      } else {
        const response = await fetch('/api/category/product', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            productId,
          }),
        })
        const jsonData = await response.json()
        console.log(jsonData)
        if (jsonData.message === 'success') {
          setShowUpdateProductForm(false)
          window.location.reload()
          router.push(`/admin/category/${params.category}`)
        }
      }
    } catch (error) {
      console.error('Error deleting data:', error)
    }
  }
  async function updateProduct({
    categoryId,
    name,
    price,
    image,
    productId,
    stars,
  }: any) {
    try {
      if (
        categoryId === '' ||
        name === '' ||
        productId === '' ||
        image === '' ||
        price === ''
      ) {
        return
      } else {
        const response = await fetch('/api/category/product', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            categoryId,
            productId,
            stars,
            price,
            name,
            image,
          }),
        })
        const jsonData = await response.json()
        if (jsonData.message === 'success') {
          setShowUpdateProductForm(false)
          window.location.reload()
          router.push(`/admin/category/${params.category}`)
          setProduct({ ...product, image: jsonData.url })
        }
      }
    } catch (error) {
      console.error('Error inserting data:', error)
    }
  }
  const ImageUpload = async (image: any) => {
    const formData = new FormData()
    formData.append('file', image)
    formData.append('upload_preset', 'tiqg9xzr') // Replace 'your_upload_preset' with your Cloudinary upload preset
    try {
      const response = await fetch(
        'https://api.cloudinary.com/v1_1/dfzqnrc1z/image/upload',
        {
          method: 'POST',
          body: formData,
        }
      )
      if (response.ok) {
        const data = await response.json()
        setProduct({ ...product, image: data.url })
      } else {
        console.error('Error uploading image:', response.statusText)
      }
    } catch (error) {
      console.error('Error uploading image:', error)
    }
  }
  const handleChange = (e: any) => {
    setProduct({ ...product, [e.target.name]: e.target.value })
  }

  return (
    <div className="w-full h-fit items-center flex-col justify-between p-[10px] md:flex-row gap-4 flex">
      <div className="border w-full max-w-[320px] h-fit">
        {product.image && typeof product.image === 'string' ? (
          <Image
            width={320}
            height={320}
            src={product.image}
            alt={product.name}
            className="w-full object-contain h-full"
          />
        ) : (
          ''
        )}
      </div>

      <form className="flex w-full flex-col gap-4">
        <label
          className="mb-[-10px] text-sm font-semibold"
          htmlFor="CategoryId"
        >
          CategoryId
        </label>

        <input
          className="w-full rounded-xl border p-3 focus:outline-none"
          name="categoryId"
          id="categoryId"
          value={product.categoryId}
          disabled
          readOnly
          onChange={(e) => handleChange(e)}
          placeholder="Enter category ID"
          type="text"
        />
        <label className="mb-[-10px] text-sm font-semibold" htmlFor="productId">
          ProductId
        </label>
        <input
          className="w-full rounded-xl border p-3 focus:outline-none"
          placeholder="ProductId"
          name="productId"
          type="text"
          disabled
          readOnly
          value={product.productId}
          onChange={(e) => handleChange(e)}
          id="productId"
        />
        <label className="mb-[-10px] text-sm font-semibold" htmlFor="Name">
          Name
        </label>
        <input
          className="w-full rounded-xl border p-3 focus:outline-none"
          placeholder="Enter password"
          name="name"
          type="text"
          value={product.name}
          onChange={(e) => handleChange(e)}
          id="name"
        />
        <label className="mb-[-10px] text-sm font-semibold" htmlFor="stars">
          Price
        </label>
        <input
          className="w-full rounded-xl border p-3 focus:outline-none"
          placeholder="Price"
          name="price"
          value={product.price}
          onChange={(e) => handleChange(e)}
          id="price"
        />
        <label className="mb-[-10px] text-sm font-semibold" htmlFor="stars">
          Stars
        </label>
        <input
          className="w-full rounded-xl border p-3 focus:outline-none"
          placeholder="Stars"
          name="stars"
          value={product.stars}
          onChange={(e) => handleChange(e)}
          id="stars"
        />

        <label className="mb-[-10px] text-sm font-semibold" htmlFor="Image">
          Image
        </label>
        <div className="flex w-full gap-3">
          <input
            className="w-full rounded-xl border p-3 focus:outline-none"
            placeholder="Upload Image"
            name="image"
            type="file"
            id="image"
            onChange={(e) => {
              e.preventDefault()
              if (e.target.files && e.target.files.length > 0) {
                setNewImage(e.target.files[0])
              }
            }}
          />

          <button
            onClick={(e) => {
              e.preventDefault()
              ImageUpload(newImage)
            }}
            className="border w-full max-w-[150px] outline-dashed rounded-xl"
          >
            Upload Image
          </button>
        </div>
        <div className="flex w-full justify-end gap-4">
          <button
            onClick={() => setShowUpdateProductForm(false)}
            className="rounded-xl max-w-[150px] items-center flex gap-1 border justify-center px-3 py-2 border-black"
          >
            <div className="flex items-center">
              {spinner ? (
                <svg
                  className="animate-spin mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                <span className="text-md font-medium">Cancel</span>
              )}
            </div>
          </button>
          <button
            onClick={(e) => {
              e.preventDefault()
              updateProduct(product)
            }}
            className="rounded-xl max-w-fit items-center flex gap-1 justify-center bg-[#4CAF50] px-3 py-2 text-white drop-shadow-lg"
          >
            <div className="flex items-center">
              {spinner ? (
                <svg
                  className="animate-spin mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                <span className="text-md font-medium">Update Product</span>
              )}
            </div>
          </button>
          <button
            onClick={(e) => {
              e.preventDefault()
              deleteProduct({ productId: product.productId })
            }}
            className="border w-full max-w-[150px] text-white bg-red-500 rounded-xl"
          >
            Delete Product
          </button>
        </div>
      </form>
    </div>
  )
}
const ProductForm = ({ setShowProductForm }: any) => {
  const [product, setProduct] = React.useState({
    categoryId: '',
    productId: '',
    name: '',
    price: '',
    image: null as File | null | string,
    stars: '',
  })
  async function addProduct({
    categoryId,
    name,
    price,
    image,
    productId,
    stars,
  }: any) {
    try {
      if (
        categoryId === '' ||
        name === '' ||
        productId === '' ||
        image === '' ||
        price === ''
      ) {
        return
      } else {
        const response = await fetch('/api/category/product/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            categoryId,
            productId,
            stars,
            price,
            name,
            image,
          }),
        })
        const jsonData = await response.json()
        if (jsonData.message === 'success') {
          setShowProductForm(false)
          window.location.reload()
        }
      }
    } catch (error) {
      console.error('Error inserting data:', error)
    }
  }

  const ImageUpload = async (image: any) => {
    const formData = new FormData()
    formData.append('file', image)
    formData.append('upload_preset', 'tiqg9xzr') // Replace 'your_upload_preset' with your Cloudinary upload preset
    try {
      const response = await fetch(
        'https://api.cloudinary.com/v1_1/dfzqnrc1z/image/upload',
        {
          method: 'POST',
          body: formData,
        }
      )
      if (response.ok) {
        const data = await response.json()
        setProduct({ ...product, image: data.url })
        console.log(data.url)
      } else {
        console.error('Error uploading image:', response.statusText)
      }
    } catch (error) {
      console.error('Error uploading image:', error)
    }
  }

  const [spinner, setSpinner] = React.useState(false)
  const [image, setImage] = React.useState<File | null>(null)

  const handleProductChange = (e: any) => {
    setProduct({ ...product, [e.target.name]: e.target.value })
  }
  return (
    <div className="w-full h-full items-center flex-col justify-between p-[10px] md:flex-row gap-4 flex">
      <div className="border flex justify-center items-center w-full max-w-[320px] min-h-[320px]">
        {product.image && typeof product.image === 'string' ? (
          <Image
            width={320}
            height={320}
            src={product.image}
            alt={product.name}
            className="w-full object-contain h-full"
          />
        ) : (
          'Your Image Goes here'
        )}
      </div>
      <form className="flex w-full flex-col gap-4">
        <label
          className="mb-[-10px] text-sm font-semibold"
          htmlFor="CategoryId"
        >
          CategoryId
        </label>

        <input
          className="w-full rounded-xl border p-3 focus:outline-none"
          name="categoryId"
          id="categoryId"
          value={product.categoryId}
          onChange={(e) => {
            handleProductChange(e)
          }}
          placeholder="Enter category ID"
          type="text"
        />
        <label className="mb-[-10px] text-sm font-semibold" htmlFor="productId">
          ProductId
        </label>
        <input
          className="w-full rounded-xl border p-3 focus:outline-none"
          placeholder="ProductId"
          name="productId"
          value={product.productId}
          onChange={(e) => handleProductChange(e)}
          id="productId"
        />
        <label className="mb-[-10px] text-sm font-semibold" htmlFor="product">
          Name
        </label>
        <input
          className="w-full rounded-xl border p-3 focus:outline-none"
          placeholder="Enter password"
          name="name"
          type="text"
          value={product.name}
          onChange={(e) => handleProductChange(e)}
          id="name"
        />
        <label className="mb-[-10px] text-sm font-semibold" htmlFor="price">
          Price
        </label>
        <input
          className="w-full rounded-xl border p-3 focus:outline-none"
          placeholder="Price"
          name="price"
          value={product.price}
          onChange={(e) => handleProductChange(e)}
          id="price"
        />

        <label className="mb-[-10px] text-sm font-semibold" htmlFor="stars">
          Stars
        </label>
        <input
          className="w-full rounded-xl border p-3 focus:outline-none"
          placeholder="stars"
          name="stars"
          value={product.stars}
          onChange={(e) => handleProductChange(e)}
          id="stars"
        />
        <label className="mb-[-10px] text-sm font-semibold" htmlFor="image">
          Image
        </label>
        <div className="flex w-full gap-3">
          <input
            className="w-full rounded-xl border p-3 focus:outline-none"
            placeholder="Upload Image"
            name="image"
            type="file"
            id="image"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setImage(e.target.files[0])
              }
            }}
          />
          <button
            onClick={(e) => {
              e.preventDefault()
              ImageUpload(image)
            }}
            className="border max-w-[150px] w-full py-1 outline-dashed outline-black rounded-xl"
          >
            Upload Image
          </button>
        </div>
        <div className="w-full flex gap-4 justify-end">
          <button
            onClick={(e) => {
              e.preventDefault()
              setShowProductForm(false)
            }}
            className="rounded-xl max-w-[150px] items-center flex gap-1 border justify-center px-3 py-2 border-black"
          >
            <div className="flex items-center">
              {spinner ? (
                <svg
                  className="animate-spin mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                <span className="text-md font-medium">Cancel</span>
              )}
            </div>
          </button>
          <button
            onClick={(e) => {
              e.preventDefault()
              addProduct(product)
            }}
            className="rounded-xl max-w-[150px] items-center flex gap-1 justify-center bg-[#4CAF50] px-3 py-2 text-white drop-shadow-lg"
          >
            <div className="flex items-center">
              {spinner ? (
                <svg
                  className="animate-spin mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                <span className="text-md font-medium">Add Product</span>
              )}
            </div>
          </button>
        </div>
      </form>
    </div>
  )
}
const ProductCard = ({
  data,
  setSelectedProduct,
  setShowUpdateProductForm,
}: any) => {
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
          onClick={(e) => {
            e.preventDefault()
            setShowUpdateProductForm(true)
            setSelectedProduct(data)
          }}
          className="duration-100 bg-black text-white w-[300px] rounded-xl p-4 uppercase font-semibold text-xs mt-3 hover:scale-105"
        >
          Update Product
        </button>
      </div>
    </div>
  )
}
export default function Page({ params }: { params: Params }) {
  const [data, setData] = useState<Product[]>([])
  const [offset, setOffSet] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [showProductForm, setShowProductForm] = useState(false)
  const [showUpdateProductForm, setShowUpdateProductForm] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  useEffect(() => {
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

  return (
    <>
      <div className="w-full items-center z-50 p-4 justify-center flex top-24 absolute">
        {showUpdateProductForm && selectedProduct && (
          <div className="bg-[#f2f2f2] border rounded-xl p-1 md:p-4 w-full max-w-[820px] h-full drop-shadow-md flex justify-center">
            <UpdateProductForm
              item={selectedProduct}
              setShowUpdateProductForm={setShowUpdateProductForm}
            />
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <div className="lg:w-[1320px] mx-4 my-8">
          <div className="flex mt-16 justify-center flex-col">
            <div className="flex w-full mb-9 justify-between">
              <div className="text-5xl capitalize font-bold">
                {params.category}
              </div>
              <button
                onClick={() => setShowProductForm(true)}
                className="duration-100 border-black border w-[150px] rounded-xl p-4 uppercase font-semibold text-xs mt-3 hover:scale-105"
              >
                Add Product
              </button>
            </div>
            <div className="grid grid-cols-1 justify-center lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:grid-cols-2">
              {data &&
                data?.map((items: Product) => (
                  <div key={items.productId}>
                    <ProductCard
                      data={items}
                      setShowUpdateProductForm={setShowUpdateProductForm}
                      setSelectedProduct={setSelectedProduct}
                    />
                  </div>
                ))}
            </div>
            <div className="w-full z-50 p-4 justify-center flex top-24 absolute">
              {showProductForm && (
                <div className="bg-[#f2f2f2] border rounded-xl p-1 md:p-4 w-full max-w-[820px] h-full drop-shadow-md flex justify-center">
                  <ProductForm setShowProductForm={setShowProductForm} />
                </div>
              )}
            </div>
            {/* <div className="w-full items-center z-50 p-4 justify-center flex top-24 absolute">
              {showUpdateProductForm && selectedProduct && (
                <div className="bg-[#f2f2f2] border rounded-xl p-1 md:p-4 w-full max-w-[820px] h-full drop-shadow-md flex justify-center">
                  <UpdateProductForm
                    item={selectedProduct}
                    setShowUpdateProductForm={setShowUpdateProductForm}
                  />
                </div>
              )}
            </div> */}
            <div className="w-full mt-10 p-10 flex items-center justify-center">
              <Pagination
                currentPage={currentPage}
                offset={offset}
                setOffSet={setOffSet}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
