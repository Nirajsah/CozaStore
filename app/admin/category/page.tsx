'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Category = {
  categoryId: string
  name: string
  description: string
  image: string | File | null
}
export default function Page() {
  const [data, setData] = useState<[]>([])
  const [msg, setMsg] = useState('')
  const [showUpdateForm, setShowUpdateForm] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  )
  const [showAddForm, setShowAddForm] = useState(false)

  const CategoryCard = ({ data }: any) => {
    return (
      <>
        <div>
          <Link
            as={`/admin/category/${data.categoryId}`}
            href={`/admin/category/${data.categoryId}`}
          >
            <div className="w-[280px] h-[280px]">
              <Image
                width={280}
                height={280}
                src={data.image as string}
                priority
                className="w-full bg-white border rounded-xl h-full object-contain"
                alt=""
              />
            </div>
            <div className="mt-3">
              <div className="text-xl font-semibold capitalize">
                {data.name}
              </div>
              <div className="truncate text-slate-500 ">{data.description}</div>
            </div>
          </Link>
          <button
            onClick={() => {
              setShowUpdateForm(true)
              setSelectedCategory(data)
            }}
            className="text-md bg-black text-white rounded-md border mt-5 px-4 py-2"
          >
            Update
          </button>
        </div>
      </>
    )
  }
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

  async function addCategory({
    categoryId,
    name,
    description,
    image,
  }: Category) {
    try {
      if (
        categoryId === '' ||
        name === '' ||
        description === '' ||
        image === ''
      ) {
        setMsg('Please fill all fields')
        return
      } else {
        const response = await fetch('/api/category', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ categoryId, name, description, image }),
        })
        const jsonData = await response.json()
        console.log(jsonData)
        setData(jsonData)
      }
    } catch (error) {
      console.error('Error inserting data:', error)
    }
  }

  const CategoryForm = () => {
    const [category, setCategory] = React.useState({
      categoryId: '',
      name: '',
      description: '',
      image: null as File | null | string,
    })
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
          console.log(data.url)
          setCategory({ ...category, image: data.url })
        } else {
          console.error('Error uploading image:', response.statusText)
        }
      } catch (error) {
        console.error('Error uploading image:', error)
      }
    }

    const [spinner, setSpinner] = React.useState(false)
    const [image, setImage] = React.useState<File | null>(null)

    const handleCategoryChange = (e: any) => {
      setCategory({ ...category, [e.target.name]: e.target.value })
    }
    return (
      <div className="w-full h-full items-center flex-col justify-between p-[10px] md:flex-row gap-4 flex">
        <div className="border flex justify-center items-center w-full max-w-[320px] min-h-[320px]">
          {category.image && typeof category.image === 'string' ? (
            <Image
              width={320}
              height={320}
              src={category.image}
              alt={category.name}
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
            value={category.categoryId}
            onChange={(e) => {
              handleCategoryChange(e)
            }}
            placeholder="Enter category ID"
            type="text"
          />
          <label className="mb-[-10px] text-sm font-semibold" htmlFor="Name">
            Name
          </label>
          <input
            className="w-full rounded-xl border p-3 focus:outline-none"
            placeholder="Enter password"
            name="name"
            type="text"
            value={category.name}
            onChange={(e) => handleCategoryChange(e)}
            id="name"
          />
          <label
            className="mb-[-10px] text-sm font-semibold"
            htmlFor="Description"
          >
            Description
          </label>
          <textarea
            className="w-full rounded-xl border p-3 focus:outline-none"
            placeholder="Category Description"
            name="description"
            value={category.description}
            onChange={(e) => handleCategoryChange(e)}
            id="description"
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

          {msg === 'success' ? (
            <span className="text-green-500 mt-[-10px] text-sm">{msg}</span>
          ) : (
            <span className="text-red-500 mt-[-10px] text-sm">{msg}</span>
          )}
          <div className="w-full flex gap-4 justify-end">
            <button
              onClick={() => setShowAddForm(false)}
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
              onClick={() => addCategory(category)}
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
                  <span className="text-md font-medium">Add Category</span>
                )}
              </div>
            </button>
          </div>
        </form>
      </div>
    )
  }

  const UpdateCategoryForm = ({ item }: any) => {
    const { categoryId, name, description, image } = item
    const [newImage, setNewImage] = React.useState<File | null>(null)
    const [spinner, setSpinner] = React.useState<File | null>(null)
    const [category, setCategory] = useState({
      categoryId,
      name,
      description,
      image,
    })
    async function updateCategory({
      categoryId,
      name,
      description,
      image,
    }: Category) {
      try {
        if (
          categoryId === '' ||
          name === '' ||
          description === '' ||
          image === ''
        ) {
          setMsg('Please fill all fields')
          return
        } else {
          const response = await fetch('/api/category', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ categoryId, name, description, image }),
          })
          const jsonData = await response.json()
          setData(jsonData)
        }
      } catch (error) {
        console.error('Error updating data:', error)
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
          setCategory({ ...category, image: data.url })
        } else {
          console.error('Error uploading image:', response.statusText)
        }
      } catch (error) {
        console.error('Error uploading image:', error)
      }
    }
    const handleChange = (e: any) => {
      setCategory({ ...category, [e.target.name]: e.target.value })
    }

    return (
      <div className="w-full h-full items-center flex-col justify-between p-[10px] md:flex-row gap-4 flex">
        <div className="border w-full max-w-[320px] min-h-[320px]">
          {category.image && typeof category.image === 'string' ? (
            <Image
              width={320}
              height={320}
              src={category.image}
              alt={category.name}
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
            value={category.categoryId}
            disabled
            onChange={(e) => handleChange(e)}
            placeholder="Enter category ID"
            type="text"
          />
          <label className="mb-[-10px] text-sm font-semibold" htmlFor="Name">
            Name
          </label>
          <input
            className="w-full rounded-xl border p-3 focus:outline-none"
            placeholder="Enter password"
            name="name"
            type="text"
            value={category.name}
            onChange={(e) => handleChange(e)}
            id="name"
          />
          <label
            className="mb-[-10px] text-sm font-semibold"
            htmlFor="Description"
          >
            Description
          </label>
          <textarea
            className="w-full rounded-xl border p-3 focus:outline-none"
            placeholder="Category Description"
            name="description"
            value={category.description}
            onChange={(e) => handleChange(e)}
            id="description"
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
          {msg === 'success' ? (
            <span className="text-green-500 mt-[-10px] text-sm">{msg}</span>
          ) : (
            <span className="text-red-500 mt-[-10px] text-sm">{msg}</span>
          )}
          <div className="flex w-full justify-end gap-4">
            <button
              onClick={() => setShowUpdateForm(false)}
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
              onClick={() => updateCategory(category)}
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
                  <span className="text-md font-medium">Update Category</span>
                )}
              </div>
            </button>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="flex w-full relative justify-center items-center">
      <div className="max-w-[1320px] w-full flex items-center flex-col">
        <div className="flex p-4 justify-center flex-col">
          <h1 className="text-5xl text-center font-semibold mb-9">AdminPage</h1>
          <div className="w-full mb-9 flex justify-between">
            <h1 className="text-5xl font-bold">Category Page</h1>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="border self-end h-fit hover:bg-black hover:text-white duration-200 ease-in-out py-3 rounded-xl font-semibold text-xl w-[180px] border-black"
            >
              Add Category
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:grid-cols-2">
            {data &&
              data.map((category: any) => (
                <CategoryCard key={category.categoryId} data={category} />
              ))}
          </div>
        </div>

        <div className="w-full p-4 justify-center flex top-24 absolute">
          {showUpdateForm && selectedCategory && (
            <div className="bg-[#f2f2f2] border rounded-xl p-1 md:p-4 w-full max-w-[820px] max-h-[600px] h-full drop-shadow-md flex justify-center">
              <UpdateCategoryForm item={selectedCategory} />
            </div>
          )}
        </div>
      </div>
      <div className="w-full p-4 justify-center flex top-24 absolute">
        {showAddForm && (
          <div className="bg-[#f2f2f2] border rounded-xl p-1 md:p-4 w-full max-w-[820px] max-h-[600px] h-full drop-shadow-md flex justify-center">
            <CategoryForm />
          </div>
        )}
      </div>
    </div>
  )
}
