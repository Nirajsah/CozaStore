'use client'
import { PiBagSimpleLight } from 'react-icons/pi'
import { toast, Toaster } from 'sonner'
export default function ShowCartButton({
  userId,
  showCart,
  setShowCart,
  cart,
  getTotalItems,
}: any) {
  return (
    <>
      <Toaster richColors />
      <button
        type="button"
        name="show cart"
        onClick={() => {
          if (userId && userId === undefined)
            toast.error('you need to login first')
          else setShowCart(!showCart)
        }}
        className="hover:scale-110 lg:flex ease-in-out duration-100"
      >
        <PiBagSimpleLight size={20} />
        <div className="absolute top-[-2px] right-[-7px] border px-1 bg-red-400 rounded-full text-center text-[10px]">
          {cart && cart.length > 0 ? getTotalItems() : 0}
        </div>
      </button>
    </>
  )
}
