"use client";
import { BsSearch } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { PiBagSimpleLight } from "react-icons/pi";
import Cart from "./Cart";
import { useState } from "react";
import Search from "./Search";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
export default function Navbar() {
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div>
      <nav className="flex bg-[#f6f6f6] bg-opacity-90 backdrop-blur border bg-transparent-xl fixed top-0 left-0 z-20 w-full justify-center">
        <div className="w-full rounded-lg m-5 mx-6 md:w-[1320px]">
          <div className="flex w-full h-full justify-between items-center flex-wrap content-center">
            <div className="flex items-center justify-between w-[320px]">
              <div className="text-xl font-bold font-fira">CozaStore</div>
              <div className="flex justify-between md:w-[150px]">
                <Link href="/">Home</Link>
                <Link href="/category">Category</Link>
              </div>
            </div>
            <div className="flex justify-between items-center md:w-[160px]">
              <button onClick={() => setShowSearch(!showSearch)}>
                <BsSearch />
              </button>
              <div className="hidden md:flex">
                <GoPerson size={20} />
              </div>
              <button
                onClick={() => setShowCart(!showCart)}
                className="hover:scale-110 ease-in-out duration-100"
              >
                <PiBagSimpleLight size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {showCart && (
          <div className="fixed right-0 p-4 z-10 top-10 w-full h-full">
            <Cart setShowCart={setShowCart} showCart={showCart} />
          </div>
        )}
      </AnimatePresence>
      <div className="flex justify-center">{showSearch && <Search />}</div>
    </div>
  );
}
