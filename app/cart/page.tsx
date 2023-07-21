"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartProvider";

const CartProductCart: React.FC<any> = ({ item }) => {
  return (
    <div className="flex-col md:flex-row w-full gap-4 p-4 flex items-center justify-between rounded-xl">
      <div className="flex flex-col w-full">
        <div className="md:flex hidden justify-between w-full">
          <div className="text-sm font-semibold">Product</div>
          <div className="text-sm font-semibold">Quantity</div>
          <div className="text-sm font-semibold">Total</div>
        </div>

        <div className="w-full mt-4 flex rounded-xl">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-4">
              <div className="w-20 rounded-lg h-20">
                <Image
                  width={80}
                  height={80}
                  src={item.image}
                  className="w-full rounded-xl h-full object-cover"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <div className="truncate w-[300px] font-semibold text-sm capitalize">
                  {item.name}
                </div>
                <div className="lg:hidden flex mt-4">
                  <div className="border mr-2 py-1 justify-between w-[100px] flex items-center rounded-lg">
                    <button
                      type="button"
                      className="flex w-[36px] justify-center items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="14px"
                        height="14px"
                        fill-rule="evenodd"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M21 13L3 13L3 11L21 11L21 13Z"
                        ></path>
                      </svg>
                    </button>
                    <input
                      type="number"
                      className="text-center bg-inherit focus:outline-none text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-[36px]"
                    />
                    <button
                      type="button"
                      className="flex w-[36px] justify-center items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="14px"
                        height="14px"
                        fill-rule="evenodd"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
                        />
                      </svg>
                    </button>
                  </div>
                  <button>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.92012 7H20.0799L18.926 22H5.07397L3.92012 7ZM6.07987 9L6.92603 20H17.074L17.9201 9H6.07987Z"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M22 9H2V7H22V9Z"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9 18L9 11L11 11L11 18L9 18Z"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13 18L13 11L15 11L15 18L13 18Z"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10 5C9.44772 5 9 5.44772 9 6V7H7V6C7 4.34315 8.34315 3 10 3H14C15.6569 3 17 4.34315 17 6V7H15V6C15 5.44772 14.5523 5 14 5H10Z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="lg:flex hidden mt-4">
                <div className="border mr-2 py-1 justify-between w-[100px] flex items-center rounded-lg">
                  <button
                    type="button"
                    className="flex w-[36px] justify-center items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="14px"
                      height="14px"
                      fill-rule="evenodd"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M21 13L3 13L3 11L21 11L21 13Z"
                      ></path>
                    </svg>
                  </button>
                  <input
                    type="number"
                    className="text-center bg-inherit focus:outline-none text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-[36px]"
                  />
                  <button
                    type="button"
                    className="flex w-[36px] justify-center items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="14px"
                      height="14px"
                      fill-rule="evenodd"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
                      />
                    </svg>
                  </button>
                </div>
                <button>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.92012 7H20.0799L18.926 22H5.07397L3.92012 7ZM6.07987 9L6.92603 20H17.074L17.9201 9H6.07987Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22 9H2V7H22V9Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9 18L9 11L11 11L11 18L9 18Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13 18L13 11L15 11L15 18L13 18Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 5C9.44772 5 9 5.44772 9 6V7H7V6C7 4.34315 8.34315 3 10 3H14C15.6569 3 17 4.34315 17 6V7H15V6C15 5.44772 14.5523 5 14 5H10Z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="font-semibold text-sm">INR</div>
          </div>
        </div>
      </div>
    </div>
  );
};
const DATA = [
  {
    categoryId: "keyboard",
    name: "Redgear Shadow Blade Mechanical Keyboard with Drive Customization, Spectrum LED Lights, Media Control Knob and Wrist Support (Black)",
    image: "https://m.media-amazon.com/images/I/61NKGdlO36L.jpg",
    stars: 4.5,
    productId: "B08T28HSDN",
    price_string: "₹2,499",
    price_symbol: "₹",
    price: 2499,
  },
  {
    categoryId: "keyboard",
    name: "Redragon K617 Fizz 60% Wired RGB Gaming Keyboard, 61 Keys Compact Mechanical Keyboard w/White and Grey Color Keycaps, Linear Red Switch, Pro Driver/Software Supported",
    image: "https://m.media-amazon.com/images/I/6124OpB-LRL.jpg",
    stars: 4.6,
    productId: "B09BVCVTBC",
    price_string: "₹2,899",
    price_symbol: "₹",
    price: 2899,
  },
  {
    categoryId: "keyboard",
    name: "Quantum QHM9850 Rapid Strike Mechanical Gaming Multimedia Wired Keyboard with 6-Colour RGB LED, 12 Adjustable Lighting Modes, Lasting Durability and Rupee (₹) Key (Black)",
    image: "https://m.media-amazon.com/images/I/711oEWUIxzL.jpg",
    stars: 4.2,
    productId: "B0B1MRNF93",
    price_string: "₹1,599",
    price_symbol: "₹",
    price: 1599,
  },
];
export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full flex justify-center items-center flex-col max-w-[1320px]">
        <div className="text-5xl mb-9 font-bold w-full">Your Cart</div>
        <div className="flex flex-col md:flex-row w-full">
          <div className="md:flex hidden justify-between w-full">
            <div className="text-sm font-semibold">Product</div>
            <div className="text-sm font-semibold">Quantity</div>
            <div className="text-sm font-semibold">Total</div>
          </div>
          {DATA ? (
            <div className="w-full">
              {DATA.map((item: any, index: number) => (
                <div className="w-full" key={index}>
                  <CartProductCart item={item} />
                </div>
              ))}
            </div>
          ) : (
            <div>No Product in Cart</div>
          )}
          <div className="flex flex-col self-start bg-white p-4 rounded-xl w-full md:max-w-[420px]">
            <div className="w-full flex justify-between">
              <div className="text-m font-semibold">Totol</div>
              <div className="text-m font-semibold">INR</div>
            </div>
            <div className="flex mt-6 justify-between gap-3 w-full">
              <button className="w-full bg-black text-white py-2 border rounded-[10px] uppercase font-semibold text-sm">
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
