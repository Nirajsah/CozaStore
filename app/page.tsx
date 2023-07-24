"use client";
import { useState } from "react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Body from "./components/Body";
import { AnimatePresence, motion } from "framer-motion";
export default function Home() {
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <main className="flex flex-col items-center justify-center">
      {/* <div className="lg:w-[1280px] relative">
        <Navbar
          showSearch={showSearch}
          setShowSearch={setShowSearch}
          setShowCart={setShowCart}
          showCart={showCart}
        />
        <AnimatePresence>
          {showCart && (
            <div className="fixed right-0 p-4 z-10 top-20 w-full h-full">
              <Cart setShowCart={setShowCart} showCart={showCart} />
            </div>
          )}
        </AnimatePresence>
      </div> */}
      <div className="lg:w-[1320px] relative">
        <div className="w-full h-full">
          <Body />
        </div>
      </div>
    </main>
  );
}
