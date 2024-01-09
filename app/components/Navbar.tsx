'use client'
import { BsSearch } from 'react-icons/bs'
import { GoPerson } from 'react-icons/go'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import Cart from './Cart'
import { useState } from 'react'
import Search from './Search'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import CartIcon from '../cart/CartIcon'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [showCart, setShowCart] = useState<boolean>(false)
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [showSearch, setShowSearch] = useState<boolean>(false)

  const router = usePathname()
  const isHome = router === '/'
  return (
    <div>
      <nav
        style={{ backgroundColor: isHome ? '#f4f1ed' : '#f8f8f8' }}
        className="flex top-0 left-0 z-20 w-full justify-center"
      >
        <div className="w-full rounded-lg m-5 mx-6 md:w-[1320px]">
          <div className="flex w-full h-full justify-between items-center flex-wrap content-center">
            <div className="flex items-center justify-between lg:w-[320px]">
              <div className="text-lg font-bold capitalize font-fira">
                <Link href="/"> Coza Store</Link>
              </div>
              <div className="lg:flex hidden justify-between md:w-[150px]">
                <Link type="link" href="/">
                  <span className="text-md">Home</span>
                </Link>
                <Link type="link" href="/category">
                  <span className="text-md">Category</span>
                </Link>
              </div>
            </div>

            <div className="flex justify-between items-center md:w-[180px] content-center w-[90px]">
              <button
                type="button"
                name="search"
                onClick={() => setShowSearch(!showSearch)}
              >
                <BsSearch />
              </button>
              <div className="hidden md:flex">
                <GoPerson size={20} />
              </div>
              <button
                type="button"
                name="show menu"
                className="lg:hidden"
                onClick={() => setShowMenu(!showMenu)}
              >
                <AiOutlineMenu />
              </button>
              <CartIcon setShowCart={setShowCart} showCart={showCart} />
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {showCart && (
          <div className="w-full h-full">
            <div
              role="button"
              onClick={() => setShowCart(!showCart)}
              className="w-full h-full z-[100] top-0 left-0 fixed bg-black opacity-60"
            ></div>
            <div className="fixed right-0 z-[200] w-full max-w-[420px] p-4 top-10 h-full">
              <Cart setShowCart={setShowCart} showCart={showCart} />
            </div>
          </div>
        )}
      </AnimatePresence>
      {showSearch && (
        <div>
          <div
            role="button"
            onClick={() => setShowSearch(!showSearch)}
            className="w-full h-full z-[50] top-0 left-0 fixed bg-black opacity-60"
          ></div>
          <div className="w-full z-[100] fixed justify-center flex">
            <Search />
          </div>
        </div>
      )}
      <AnimatePresence>
        {showMenu && (
          <div className="lg:hidden absolute p-4 flex z-[50] justify-center h-full w-full">
            <div
              role="button"
              onClick={() => setShowMenu(!showMenu)}
              className="w-full h-full z-[100] top-0 left-0 fixed bg-black opacity-60"
            ></div>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: '100%' }}
              transition={{
                duration: 0.4,
              }}
              exit={{
                height: 0,
                transition: {
                  duration: 0.2,
                },
              }}
              className="w-[90%] h-full fixed z-[100] max-h-[480px] p-3 max-w-[420px] rounded-2xl bg-white"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.2 },
                }}
                className="flex flex-col w-full p-4 justify-between"
              >
                <div className="w-full flex items-center justify-between">
                  <div className="text-2xl font-bold">CozaStore</div>
                  <button
                    className="lg:hidden"
                    onClick={() => setShowMenu(!showMenu)}
                  >
                    <AiOutlineClose size={20} />
                  </button>
                </div>
                <div className="mt-[3rem] gap-5 flex h-full flex-col">
                  <Link
                    role="button"
                    onClick={() => setShowMenu(!showMenu)}
                    href="/"
                  >
                    <span className="font-medium text-2xl">Home</span>
                  </Link>

                  <Link
                    role="button"
                    onClick={() => setShowMenu(!showMenu)}
                    href="/category"
                  >
                    <span className="font-medium text-2xl">Category</span>
                  </Link>
                  <span className="font-medium md:hidden text-2xl">
                    Profile
                  </span>

                  <Link
                    role="button"
                    onClick={() => setShowMenu(!showMenu)}
                    href="/cart"
                  >
                    <span className="font-medium text-2xl">Cart</span>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
