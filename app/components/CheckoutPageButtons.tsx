import React from 'react'

export function CheckoutButton({ handleSubmit }: { handleSubmit: () => void }) {
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault()
          handleSubmit()
        }}
        className="border border-black hover:bg-black text-black rounded-xl hover:text-white font-semibold py-2 px-4 w-full"
      >
        Checkout
      </button>
    </div>
  )
}
