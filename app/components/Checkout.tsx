import React from 'react'
import Image from 'next/image'
import { CheckoutButton } from './CheckoutPageButtons'

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
export default function Checkout({ cart }: any) {
  const [selectedCard, setSelectedCard] = React.useState('Credit Card')
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)
  const [showToast, setShowToast] = React.useState<boolean>(false)

  const handleCardChange = (card: any) => {
    setSelectedCard((prevSelectedCard) => {
      setIsDropdownOpen(false)
      return card
    })
  }
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

  const [card, setCard] = React.useState({
    cardNumber: '',
    cardHolder: '',
    expirationDate: '',
    cvv: '',
    amount: totalPriceAfterTax(),
    type: selectedCard,
  })

  const handleSubmit = async () => {
    let expirationDateInt
    const expirationDateString = card.expirationDate.replace('/', '')

    if (expirationDateString.length === 4 && expirationDateString[0] === '0') {
      expirationDateInt = parseInt(expirationDateString.slice(1), 10)
    } else {
      expirationDateInt = parseInt(expirationDateString, 10)
    }
    const cvvInt = parseInt(card.cvv, 10)
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: card.amount,
          cardNumber: card.cardNumber,
          cardHolder: card.cardHolder,
          expirationDate: expirationDateInt,
          cvv: cvvInt,
          type: card.type,
        }),
      })
      const jsonData = await response.json()
      if (jsonData.message === 'success') {
        setShowToast(true)
      }
      return jsonData
    } catch (error) {
      return error
    }
  }

  const handleCardNumberChange = (e: any) => {
    const { name, value } = e.target

    if (name === 'expirationDate') {
      // Format the expiration date input
      let formattedValue = value.replace(/\D/g, '') // Remove non-digit characters
      formattedValue = formattedValue.substring(0, 4) // Limit to 4 digits
      // Add a forward slash after the first two digits
      if (formattedValue.length > 2) {
        formattedValue = `${formattedValue.slice(0, 2)}/${formattedValue.slice(
          2,
          4
        )}`
      }
      setCard({ ...card, [name]: formattedValue })
    } else {
      setCard({ ...card, [name]: value })
    }
  }

  React.useEffect(() => {
    setCard((prevCard) => ({
      ...prevCard,
      amount: totalPriceAfterTax(),
      type: selectedCard,
    }))
  }, [selectedCard, totalPriceAfterTax()])

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const formatCardNumber = (value: any) => {
    const cleanValue = value.replace(/\s/g, '') // Remove existing spaces
    const formattedValue = cleanValue.replace(/(.{4})/g, '$1 ').trim() // Add space after every 4 digits
    return formattedValue
  }

  const handleNumberChange = (e: any) => {
    let formattedValue = formatCardNumber(e.target.value)
    setCard({ ...card, cardNumber: formattedValue })
  }

  const cardOptions = ['Credit Card', 'Debit Card']

  return (
    <div className="flex justify-center items-center h-full">
      {showToast && (
        <div className="toast toast-end z-50">
          <div role="alert" className="alert alert-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Your purchase has been confirmed!</span>
          </div>
        </div>
      )}
      <div className="w-full max-w-[1024px] h-[640px] bg-white rounded-3xl shadow-lg flex">
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
        <div className="w-1/2 bg-gradient-to-l from-[#844FF3] to-[#C1A5FF] rounded-r-3xl p-6 text-white">
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
                  <ul className="divide-y divide-white/20">
                    {cardOptions.map((option: string) => (
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
          <Image
            width={150}
            height={150}
            src="https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png"
            alt="Credit Card"
            className="h-20 mx-auto mb-6"
          />
          <div className="mb-4">
            <label
              htmlFor="cardNumber"
              className="block text-black text-sm font-bold mb-2"
            >
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              required
              value={card.cardNumber}
              style={{ letterSpacing: '1px' }}
              className="w-full bg-white/10 px-4 py-2 rounded outline outline-[#844CF3] text-white"
              onChange={handleNumberChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="cardHolder"
              className="block text-black text-sm font-bold mb-2"
            >
              Card Holder
            </label>
            <input
              type="text"
              id="cardHolder"
              name="cardHolder"
              value={card.cardHolder}
              onChange={handleCardNumberChange}
              required
              className="w-full bg-white/10 px-4 py-2 rounded outline outline-[#844CF3] text-white"
            />
          </div>
          <div className="flex justify-between mb-8">
            <div className="w-1/2 mr-2">
              <label
                htmlFor="expirationDate"
                className="block text-black text-sm font-bold mb-2"
              >
                Expires
              </label>
              <input
                type="text"
                id="expirationDate"
                name="expirationDate"
                value={card.expirationDate}
                required
                onChange={handleCardNumberChange}
                className="w-full bg-white/10 px-4 py-2 rounded outline outline-[#844CF3] text-white"
              />
            </div>
            <div className="w-1/2 ml-2">
              <label htmlFor="cvc" className="block text-black text-sm mb-2">
                CVC
              </label>
              <input
                type="text"
                value={card.cvv}
                id="cvv"
                required
                name="cvv"
                onChange={handleCardNumberChange}
                className="w-full bg-white/10 px-4 py-2 rounded outline outline-[#844CF3] text-white"
              />
            </div>
          </div>
          <CheckoutButton handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  )
}
