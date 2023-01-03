import React from 'react'

export default function Pagination({ gotoNextPage, gotoPreviousPage }) {
  return (
    <div className='buttons'>
      {gotoPreviousPage && <button className='btn' onClick={gotoPreviousPage}>Previous</button>}
      {gotoNextPage && <button className='btn' onClick={gotoNextPage}>Next</button>}
    </div>
  )
}
