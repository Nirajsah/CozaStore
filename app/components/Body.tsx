import React from "react";
import { motion } from "framer-motion";

interface ProductTypes {
  categoryId: string;
  name: string;
  image: string;
  stars: number;
  productId: string;
  price_string: string;
  price_symbol: string;
  price: number;
  quantity?: number;
}

export default function Body() {
  const TEXT: string = "Buy Now Pay Never!";
  return (
    <div className="flex justify-center">
      <div className="md:w-full w-full h-[600px]">
        <div className="flex justify-center items-center w-full h-full">
          <div className="text-[72px] flex font-bold">
            {TEXT.split(" ").map((character: string, index: number) => (
              <motion.span
                className="mx-2"
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                  delay: index * 0.2,
                }}
              >
                {character}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
