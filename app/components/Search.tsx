import React from "react";
import { BsSearch } from "react-icons/bs";

export default function Search() {
  return (
    <div className="fixed top-[100px] z-10 rounded-xl bg-white w-[620px] h-[420px]">
      <div className="flex border-b px-4 h-[60px] items-center">
        <BsSearch />
        <input
          placeholder="Search Products"
          className="ml-4 w-full h-full focus:outline-none"
        />
      </div>
    </div>
  );
}
