import React from 'react'

const Stars = ({ count }: { count: number }) => {
  const renderInputFields = () => {
    const inputFields = Array.from({ length: count }, (_, index) => (
      <div className="rating" key={index}>
        <input
          type="radio"
          name="rating-4"
          className="mask mask-star-2 bg-green-500"
          checked
        />
      </div>
    ))
    return inputFields
  }

  return (
    <div>
      {renderInputFields()}
      <p>{count}</p>
    </div>
  )
}

export default Stars
