import Image from 'next/image'
import { DecreaseQuantity, IncreaseQuantity, RemoveItem } from './AddToCart'

interface ProductTypes {
  categoryId: string
  name: string
  image: string
  stars: number
  productId: string
  price_string: string
  price_symbol: string
  price: number
  quantity: number
}

// type CartProps = {
//   item: any
// }

export const CartProduct = ({ item }: any): any => {
  return (
    <div className="flex mt-4 flex-col">
      <div className="flex self-start items-center w-full">
        <div className="min-w-20 rounded-lg h-20">
          <Image
            width={80}
            height={80}
            src={item.product.image}
            className="w-full h-full object-contain"
            alt=""
          />
        </div>
        <div className="w-full justify-between flex">
          <div className="ml-4 justify-between">
            <div className="text-ellipsis overflow-hidden w-[160px] h-[30px] md:h-[40px] font-semibold md:text-sm text-xs capitalize">
              {item.product.name}
            </div>
            {/* <Stars
                  count={5} // Total number of stars
                  value={item.stars} // Current rating value
                  size={15} // Size of the stars in pixels
                  edit={false}
                  color1="#cccccc" // Inactive star color
                  color2="#ffd700" // Active star color (gold in this example)
                /> */}
            <div className="flex mt-2">
              <div className="border mr-2 py-1 justify-between w-[100px] flex items-center rounded-lg">
                <DecreaseQuantity data={item} />
                <input
                  type="number"
                  readOnly
                  value={item.cart.quantity}
                  className="text-center focus:outline-none text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-[36px]"
                />
                <IncreaseQuantity data={item} />
              </div>
              <RemoveItem item={item} />
            </div>
          </div>
          <div className="self-start font-semibold text-xs md:text-sm">
            ₹ {item.product.price} INR
          </div>
        </div>
      </div>
    </div>
  )
}
