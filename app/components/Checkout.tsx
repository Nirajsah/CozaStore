import React from 'react'

export default function Checkout() {
  const [selectedCard, setSelectedCard] = React.useState('Visa')
  const handleCardChange = (card: any) => {
    setSelectedCard(card)
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-teal-200 to-blue-200">
      <div className="w-[800px] h-[540px] bg-white rounded-3xl shadow-lg flex">
        <div className="w-1/2 p-6">
          <h2 className="text-center text-lg font-light mb-4">Order Summary</h2>
          <div className="border-b border-gray-300 mb-4"></div>
          {/* Order items */}
          <div className="space-y-4">
            {/* Item 1 */}
            <div className="flex items-center">
              <img
                src="https://dl.dropboxusercontent.com/s/sim84r2xfedj99n/%24_32.JPG"
                alt="Product 1"
                className="w-20 h-20 object-cover"
              />
              <div className="ml-4">
                <span className="font-light">Nike</span>
                <p>Free Run 3.0 Women</p>
                <span className="text-sm font-light">
                  Color: Grey/Orange, Size: 10.5
                </span>
              </div>
              <div className="ml-auto font-bold">$99.95</div>
            </div>
            {/* Item 2 */}
            <div className="flex items-center">
              <img
                src="https://dl.dropboxusercontent.com/s/qbj9tsbvthqq72c/Vintage-20L-Backpack-by-Fj%C3%A4llr%C3%A4ven.jpg"
                alt="Product 2"
                className="w-20 h-20 object-cover"
              />
              <div className="ml-4">
                <span className="font-light">Fjällräven</span>
                <p>Vintage Backpack</p>
                <span className="text-sm font-light">
                  Color: Olive, Size: 20L
                </span>
              </div>
              <div className="ml-auto font-bold">$235.95</div>
            </div>
            {/* Item 3 */}
            <div className="flex items-center">
              <img
                src="https://dl.dropboxusercontent.com/s/nbr4koso8dpoggs/6136C1p5FjL._SL1500_.jpg"
                alt="Product 3"
                className="w-20 h-20 object-cover"
              />
              <div className="ml-4">
                <span className="font-light">Monobento</span>
                <p>Double Lunchbox</p>
                <span className="text-sm font-light">
                  Color: Pink, Size: Medium
                </span>
              </div>
              <div className="ml-auto font-bold">$25.95</div>
            </div>
          </div>
          <div className="border-b border-gray-300 my-4"></div>
          <div className="flex justify-between items-center text-sm font-light mb-4">
            <div>
              <p>VAT 19%</p>
              <p>Delivery</p>
              <p className="font-bold">TOTAL</p>
            </div>
            <div className="text-right">
              <p>$68.75</p>
              <p>$4.95</p>
              <p className="font-bold">$435.55</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-blue-500 rounded-r-3xl p-6 text-white">
          <div className="mb-6">
            <p className="mb-2">Please select your card:</p>
            <div className="relative inline-block">
              <button className="bg-white/10 px-4 py-2 rounded w-full text-left flex items-center justify-between">
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
              <div className="absolute z-10 w-full bg-white/10 rounded mt-2 overflow-hidden">
                <ul>
                  <li
                    className="px-4 py-2 hover:bg-white/20 cursor-pointer"
                    onClick={() => handleCardChange('Master Card')}
                  >
                    Master Card
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-white/20 cursor-pointer"
                    onClick={() => handleCardChange('American Express')}
                  >
                    American Express
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <img
            src="https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png"
            alt="Credit Card"
            className="h-20 mx-auto mb-6"
          />
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block mb-2">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              className="w-full bg-white/10 px-4 py-2 rounded text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cardHolder" className="block mb-2">
              Card Holder
            </label>
            <input
              type="text"
              id="cardHolder"
              className="w-full bg-white/10 px-4 py-2 rounded text-white"
            />
          </div>
          <div className="flex justify-between mb-8">
            <div className="w-1/2 mr-2">
              <label htmlFor="expirationDate" className="block mb-2">
                Expires
              </label>
              <input
                type="text"
                id="expirationDate"
                className="w-full bg-white/10 px-4 py-2 rounded text-white"
              />
            </div>
            <div className="w-1/2 ml-2">
              <label htmlFor="cvc" className="block mb-2">
                CVC
              </label>
              <input
                type="text"
                id="cvc"
                className="w-full bg-white/10 px-4 py-2 rounded text-white"
              />
            </div>
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full">
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}
