"use client";
import Image from "next/image";
import Products from "../../db/products.json";
import Stars from "react-stars";
import React from "react";
import { useCart } from "@/app/context/CartProvider";

type Params = {
  id: string;
};

type products = {
  categoryId: string;
  name: string;
  image: string;
  stars: number;
  productId: string;
  price_string: string;
  price_symbol: string;
  price: number;
};

type ProductCardProps = {
  data: products;
};
const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const { addToCart } = useCart();
  return (
    <div className="w-full sm:w-[320px]">
      <div className="w-full relative h-[300px]">
        <Image
          width={300}
          height={300}
          src={data.image}
          className="w-full rounded-xl h-full absolute object-cover"
          alt=""
        />
      </div>
      <div className="mt-3">
        <h5 className="truncate mb-1 font-semibold">{data.name}</h5>
        <div className="mb-1 text-sm font-bold">
          {data.price_symbol}
          {data.price}
        </div>
        <div className="flex">
          <Stars
            count={5}
            value={data.stars}
            size={15}
            edit={false}
            color1="#cccccc"
            color2="black"
          />
        </div>
        <button
          onClick={() => addToCart(data)}
          className="duration-100 underline uppercase font-josefin font-semibold text-xs mt-3 hover:scale-105 transition-all"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default function Page({ params }: { params: Params }) {
  const Data: products[] = Products.filter(
    (item) => item.categoryId === params.id
  );
  return (
    <div className="flex justify-center">
      <div className="lg:w-[1320px] mx-4 my-8">
        <div className="flex mt-16 justify-center flex-col">
          <h1 className="text-5xl mb-9 capitalize font-bold">{params.id}</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:grid-cols-2">
            {Data.map((data: products) => (
              <ProductCard key={data.categoryId} data={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
