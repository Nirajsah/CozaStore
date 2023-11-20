"use client";
import Image from "next/image";
import Stars from "react-stars";
import React, { useEffect, useState } from "react";
import { useCart } from "@/app/context/CartProvider";
import Link from "next/link";
import { Product } from "@/app/db/schema/schema";

type Params = {
  id: string;
  category: string;
};

type ProductCardProps = {
  data: Product;
};
const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const { addToCart } = useCart();
  return (
    <div className="w-full sm:w-[320px]">
      <div className="w-[300px] relative h-[300px]">
        <Image
          width={300}
          priority
          height={300}
          src={data.image as string}
          className="w-full rounded-xl h-full absolute object-contain"
          alt=""
        />
      </div>
      <div className="mt-3">
        <h5 className="truncate w-[300px] mb-1 font-semibold">{data.name}</h5>
        <div className="mb-1 text-sm font-bold">{data.price}</div>
        <div className="flex">
          {
            <Stars
              count={5}
              value={data.stars as number}
              size={15}
              edit={false}
              color1="#cccccc"
              color2="black"
            />
          } {data.stars}
        </div>
        <button
          onClick={() => addToCart(data)}
          className="duration-100 underline uppercase font-semibold text-xs mt-3 hover:scale-105 transition-all"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default function Page({ params }: { params: Params }) {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/category/product", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ categoryId: params.category }),
        });
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [params.category]);

  return (
    <div className="flex justify-center">
      <div className="lg:w-[1320px] mx-4 my-8">
        <div className="flex mt-16 justify-center flex-col">
          <h1 className="text-5xl mb-9 capitalize font-bold">
            {params.category}
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:grid-cols-2">
            {data && data?.map((items: Product) => (
              <Link
                href={`/category/${params.category}/${items.productId}`}
                as={`/category/${params.category}/${items.productId}`}
                key={items.productId}
              >
                <ProductCard data={items} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
