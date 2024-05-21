'use client'
import Link from 'next/link'
import { toast } from 'sonner'

export const CheckoutModal = () => {
  return (
    <button
      className="w-1/2 py-2 bg-black text-white border rounded-[10px] uppercase font-semibold text-sm"
      onClick={() => {
        const modal = document.getElementById('my_modal_2') as HTMLDialogElement
        if (modal) {
          modal.showModal()
        }
      }}
    >
      Checkout
    </button>
  )
}

export function ViewCart({ isLoggedIn }: any) {
  return (
    <Link
      className="btn w-1/2 py-2 border rounded-[10px] uppercase font-semibold text-sm"
      href="/cart"
      onClick={() => {
        if (!isLoggedIn) {
          toast.error('You need to login first')
          return
        }
      }}
    >
      View Cart
    </Link>
  )
}
export default CheckoutModal
