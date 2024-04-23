import React from 'react'
import Image from 'next/image'
import Previous from '@/app/assets/previous.png'

const Pagination = ({
  offset,
  setOffSet,
  currentPage,
  setCurrentPage,
}: any) => {
  return (
    <div className="flex items-center self-center justify-between w-[170px]">
      <button
        className="border-2 border-black flex justify-center rounded-full p-2"
        onClick={() => {
          setOffSet(offset - 10)
          setCurrentPage(currentPage - 1)
        }}
      >
        <Image src={Previous} width={20} height={20} alt="" />
      </button>
      <span className="text-lg"> {currentPage} </span>
      <button
        className="border-2 border-black flex justify-center rounded-full p-2"
        onClick={() => {
          setOffSet(offset + 10)
          setCurrentPage(currentPage + 1)
        }}
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
