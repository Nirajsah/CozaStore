import React from "react";
type Params = {
  product: string;
};
export default function page({ params }: { params: Params }) {
  const { product } = params;
  return <div className="text-4xl mt-[5rem] text-center">Hello {product} </div>;
}
