'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

type Category = {
  categoryId: string
  name: string
  description: string
  image: string
}
export default function Page() {
  const [data, setData] = useState<[]>([])
  const [category, setCategory] = useState('')
  const [msg, setMsg] = useState('')
  const [showUpdateForm, setShowUpdateForm] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  )

  const [form, setForm] = useState({
    categoryId: '',
    name: '',
    description: '',
    image: '',
  })

  const CategoryCard = ({ data }: any) => {
    return (
      <>
        <div
          onClick={() => {
            setShowUpdateForm(true)
            setSelectedCategory(data)
          }}
        >
          <div className="w-[280px] h-[280px]">
            <Image
              width={280}
              height={280}
              src={data.image as string}
              priority
              className="w-full rounded-xl h-full object-scale-down"
              alt=""
            />
          </div>
          <div className="mt-3">
            <div className="text-xl font-semibold capitalize">{data.name}</div>
            <div className="truncate text-slate-500 ">{data.description}</div>
          </div>
        </div>
      </>
    )
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/category')
        const jsonData = await response.json()
        console.log(jsonData)
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
        console.log(jsonData)
        setData(jsonData)
      }
    } catch (error) {
      console.error('Error updating data:', error)
    }
  }

  const CategoryForm = () => {
    const [category, setCategory] = React.useState({
      categoryId: '',
      name: '',
      description: '',
      image: '',
    })

    const handleCategoryChange = (e: any) => {
      setCategory({ ...category, [e.target.name]: e.target.value })
    }
    return (
      <div>
        <form>
          <label htmlFor="categoryId">categoryId</label>
          <input
            type="text"
            name="categoryId"
            id="categoryId"
            value={category.categoryId}
            onChange={handleCategoryChange}
          />
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={category.name}
            onChange={handleCategoryChange}
          />
          <label htmlFor="description">description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={category.description}
            onChange={handleCategoryChange}
          />
          <label htmlFor="image">image</label>
          <input
            type="text"
            name="image"
            id="image"
            value={category.image}
            onChange={handleCategoryChange}
          />
        </form>
        {msg && <p>{msg}</p>}
        <button onClick={() => addCategory(category)}>Add Category</button>
      </div>
    )
  }

  const UpdateCategoryForm = ({ item }: any) => {
    const { categoryId, name, description, image } = item
    const [category, setCategory] = useState({
      categoryId,
      name,
      description,
      image,
    })

    const handleChange = (e: any) => {
      setCategory({ ...category, [e.target.name]: e.target.value })
    }

    const handleSubmit = (event: any) => {
      event.preventDefault()
      updateCategory(category)
    }

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={category.name}
          onChange={handleChange}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          value={category.description}
          onChange={handleChange}
        />

        <label htmlFor="image">Image:</label>
        <input type="file" name="image" onChange={handleChange} />

        <button type="submit">Update Category</button>
      </form>
    )
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="lg:w-[1320px] mt-6">
          <h1 className="text-5xl text-center mb-9 font-fira underline">
            AdminPage
          </h1>
          <div className="flex mt-16 p-4 justify-center flex-col">
            <h1 className="text-5xl mb-9 font-bold">Category Page</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:grid-cols-2">
              {data &&
                data.map((category: any) => (
                  <CategoryCard key={category.categoryId} data={category} />
                ))}
            </div>
          </div>
          <CategoryForm />
          {showUpdateForm && selectedCategory && (
            <UpdateCategoryForm item={selectedCategory} />
          )}
        </div>

        {JSON.stringify(category)}
      </div>
    </>
  )
}
