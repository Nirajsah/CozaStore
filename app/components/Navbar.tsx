import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
export function Navbar() {
  return (
    <nav className="border-b flex justify-center">
      <div className="w-[680px] mx-6 md:w-[1320px] h-[80px]">
        <div className="flex w-full h-full justify-between items-center flex-wrap content-center">
          <div>
            <div className="text-xl">CozaStore</div>
          </div>
          <div className="w-[60%] md:flex hidden items-center">
            <input
              placeholder="Search Products..."
              className="border border-black focus:outline-none rounded-l-full px-4 py-3 w-full"
            />
            <button className="bg-black text-white w-32 flex justify-center p-[15px] rounded-r-full">
              <BsSearch size={20} />
            </button>
          </div>
          <div className="flex justify-between items-center md:w-[120px]">
            <div className="hidden md:flex">Profile</div>
            <button className="hover:scale-110 ease-in-out duration-100">
              <AiOutlineShoppingCart size={30} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
