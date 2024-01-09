import React from 'react'
import Image from 'next/image'
import Previous from '@/app/assets/previous.png'

const Pagination = ({ currentPage, setCurrentPage, Items }: any) => {
  const productsPerPage = 8
  const totalProducts = Items.length
  return (
    <div className="flex items-center self-center justify-between mt-8 w-[170px]">
      <button
        className="border-2 border-black flex justify-center rounded-full p-2"
        onClick={() => setCurrentPage((prev: any) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
      >
        <Image src={Previous} width={20} height={20} alt="" />
      </button>
      <span className="text-lg"> {currentPage} </span>
      <button
        className="border-2 border-black flex justify-center rounded-full p-2"
        onClick={() =>
          setCurrentPage((prev: any) =>
            Math.min(prev + 1, Math.ceil(totalProducts / productsPerPage))
          )
        }
        disabled={currentPage === Math.ceil(totalProducts / productsPerPage)}
      >
        <Image
          style={{ transform: 'rotate(180deg)' }}
          src={Previous}
          width={20}
          height={20}
          alt=""
        />
      </button>
    </div>
  )
}

export default Pagination
