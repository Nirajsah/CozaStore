'use client'
import React from 'react'
import { useUser } from '../context/UserProvider'

const Card = ({ cart }: any) => {
  return (
    <div className="">
      <div className="flex items-center">
        <img
          src={cart.product.image}
          alt="Product 1"
          className="w-20 h-20 object-cover"
        />
        <div className="ml-4">
          <div className="truncate w-[170px] font-semibold text-sm capitalize">
            {cart.product.name}
          </div>
          <span className="text-sm font-semibold">
            Quantity: {cart.cart.quantity}
          </span>
        </div>
        <div className="ml-auto text-sm font-bold">₹ {cart.product.price}</div>
      </div>
    </div>
  )
}
export default function page() {
  const [cart, setCart] = React.useState([])
  const { userId } = useUser()

  React.useEffect(() => {
    const getCart = async ({ userId }: { userId: number }) => {
      try {
        const response = await fetch('/api/cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId }),
        })
        const jsonData = await response.json()
        return jsonData
      } catch (error) {
        return error
      }
    }
    getCart({ userId }).then((data) => {
      console.log(data.cart)
      setCart(data.cart)
    })
  }, [userId, cart])

  return (
    <div>
      <CheckoutPage cart={cart} />
    </div>
  )
}

const CheckoutPage = ({ cart }: any) => {
  const [selectedCard, setSelectedCard] = React.useState('Credit Card')
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)
  const handleCardChange = (card: any) => {
    setSelectedCard(card)
    setIsDropdownOpen(false)
    console.log(card)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const cardOptions = ['Credit Card', 'Debit Card']
  const totalPrice = () => {
    let total = 0
    if (cart && cart.length > 0) {
      cart.forEach((item: any) => {
        total += item.product.price * item.cart.quantity
      })
      return total
    }
    return total
  }
  const totalPriceAfterTax = (): number => {
    return calculate18Percent(totalPrice()) + totalPrice()
  }
  function calculate18Percent(value: number): number {
    const percentValue = value * 0.18
    return percentValue
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[800px] h-[540px] bg-white rounded-3xl shadow-lg flex">
        <div className="w-1/2 p-6">
          <h2 className="text-center text-lg font-light mb-4">Order Summary</h2>
          <div className="border-b border-gray-300 mb-4"></div>
          <div className="space-y-4">
            {cart && cart.map((item: any) => <Card cart={item} />)}
          </div>
          <div className="border-b border-gray-300 my-4"></div>
          <div className="flex justify-between items-center text-sm font-light mb-4">
            <div>
              <p>GST 18%</p>
              <p>Delivery</p>
              <p className="font-bold">TOTAL</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-sm">
                ₹ {calculate18Percent(totalPrice()).toFixed(2)}
              </p>
              <p className="text-sm font-semibold">₹ {totalPrice()}</p>
              <p className="font-bold">₹ {totalPriceAfterTax().toFixed(2)}</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-blue-500 rounded-r-3xl p-6 text-white">
          <div className="mb-6">
            <div className="relative inline-block">
              <button
                onClick={toggleDropdown}
                className="bg-white/10 px-4 py-2 rounded w-full text-left flex items-center justify-between"
              >
                {selectedCard}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute z-10 w-full bg-white/10 rounded mt-2 overflow-hidden">
                  <ul>
                    {cardOptions.map((option) => (
                      <li
                        key={option}
                        className="px-4 py-2 hover:bg-white/20 cursor-pointer"
                        onClick={() => handleCardChange(option)}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <img
            src="https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png"
            alt="Credit Card"
            className="h-20 mx-auto mb-6"
          />
          <div className="mb-4">
            <label
              htmlFor="cardNumber"
              className="block text-sm font-bold mb-2"
            >
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              required
              className="w-full bg-white/10 px-4 py-2 rounded text-white"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="cardHolder"
              className="block text-sm font-bold mb-2"
            >
              Card Holder
            </label>
            <input
              type="text"
              id="cardHolder"
              className="w-full bg-white/10 px-4 py-2 rounded text-white"
              required
            />
          </div>
          <div className="flex justify-between mb-8">
            <div className="w-1/2 mr-2">
              <label
                htmlFor="expirationDate"
                className="block text-sm font-bold mb-2"
              >
                Expires
              </label>
              <input
                type="text"
                id="expirationDate"
                required
                className="w-full bg-white/10 px-4 py-2 rounded text-white"
              />
            </div>
            <div className="w-1/2 ml-2">
              <label htmlFor="cvc" className="block mb-2">
                CVC
              </label>
              <input
                type="text"
                required
                id="cvc"
                className="w-full bg-white/10 px-4 py-2 rounded text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
