'use client'
import React from 'react'

const Pagination = ({
  offset,
  setOffSet,
  currentPage,
  setCurrentPage,
}: any) => {
  const handlePageChange = (currentPage: number) => {
    if (currentPage < 1) {
      currentPage = 1
    } else {
      setCurrentPage(currentPage)
    }
  }

  return (
    <div className="flex items-center self-center justify-between w-[170px]">
      <div className="join">
        <button
          onClick={() => {
            setOffSet(offset - 10)
            handlePageChange(currentPage - 1)
          }}
          className="join-item btn"
        >
          «
        </button>
        <button className="join-item btn">Page {currentPage}</button>
        <button
          onClick={() => {
            setOffSet(offset + 10)
            handlePageChange(currentPage + 1)
          }}
          className="join-item btn"
        >
          »
        </button>
      </div>
    </div>
  )
}

export default Pagination
