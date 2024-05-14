'use client'
import { BsSearch } from 'react-icons/bs'
import { GoPerson } from 'react-icons/go'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import Cart from './Cart'
import { useEffect, useState } from 'react'
import Search from './Search'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import CartIcon from '../cart/CartIcon'
import { usePathname } from 'next/navigation'
import { useUser } from '../context/UserProvider'
import Image from 'next/image'
import Logo from '../assets/Logo3.png'

export default async function Navbar() {
  const [showCart, setShowCart] = useState<boolean>(false)
  const [showSearch, setShowSearch] = useState<boolean>(false)
  const { user } = useUser()

  return (
    <div>
      <nav className="flex top-0 left-0 z-20 w-full justify-center">
        <div className="w-full rounded-lg m-5 mx-6 md:w-[1320px]">
          <div className="flex w-full h-full justify-between items-center flex-wrap content-center">
            <div className="flex items-center justify-between lg:w-[320px]">
              <div className="text-2xl font-bold font-fira">
                <Image src={Logo} width={100} height={60} alt="logo" />
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
            <div className="flex gap-4 justify-between items-center md:w-fit content-center w-fit">
              <button
                type="button"
                name="search"
                onClick={() => setShowSearch(!showSearch)}
              >
                <BsSearch />
              </button>
              <Link
                href={user && user.username ? '/' : '/login'}
                className="hidden bg-gradient-to-tr from-[#FFB777] to-[#F16C6A] px-4 py-2 rounded-full md:flex md:items-center gap-2"
              >
                <GoPerson size={20} />
                {user && user.username ? (
                  <span className="text-md">{user.username}</span>
                ) : (
                  'Get Started'
                )}
              </Link>
              {/* <div className="drawer drawer-end z-50 w-fit">
                <input
                  id="my-drawer-4"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content">
                  <label
                    htmlFor="my-drawer-4"
                    className="drawer-button btn btn-square btn-ghost"
                  >
                    <AiOutlineMenu />
                  </label>
                </div>
                <div className="drawer-side">
                  <label
                    htmlFor="my-drawer-4"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <div className="menu p-4 w-[16rem] min-h-full bg-base-200 text-base-content">
                    <NavMenu />
                  </div>
                </div>
              </div> */}
              <div className="drawer drawer-end z-50 w-fit">
                <input
                  id="my-drawer-4"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content">
                  <label
                    htmlFor="my-drawer-4"
                    className="drawer-button btn btn-square btn-ghost"
                  >
                    <AiOutlineMenu />
                  </label>
                </div>
                <div className="drawer-side">
                  <label
                    htmlFor="my-drawer-4"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <div className="menu w-full max-w-[350px] p-4 min-h-full text-base-content">
                    <CartMenu setShowCart={setShowCart} showCart={showCart} />
                  </div>
                </div>
              </div>
              {/* <CartIcon setShowCart={setShowCart} showCart={showCart} /> */}
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
            <CartMenu setShowCart={setShowCart} showCart={showCart} />
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
    </div>
  )
}

const CartMenu = ({ setShowCart, showCart }: any) => {
  return (
    <div className="fixed right-0 z-[200] w-full max-w-[420px] p-4 top-10 h-full">
      <Cart setShowCart={setShowCart} showCart={showCart} />
    </div>
  )
}
const NavMenu = () => {
  return (
    <div className="mt-[3rem] gap-3 flex h-full flex-col">
      <div className="text-2xl font-bold">CozaStore</div>
      <Link role="button" href="/">
        <span className="font-medium text-2xl">Home</span>
      </Link>

      <Link role="button" href="/category">
        <span className="font-medium text-2xl">Category</span>
      </Link>
      <span className="font-medium md:hidden text-2xl">Profile</span>

      <Link role="button" href="/cart">
        <span className="font-medium text-2xl">Cart</span>
      </Link>
      <button className="bg-gradient-to-tr w-fit from-[#FFB777] to-[#F16C6A] px-4 py-2 rounded-full flex items-center gap-2">
        <GoPerson size={20} />
        <span className="text-lg">Get Started</span>
      </button>
    </div>
  )
}
