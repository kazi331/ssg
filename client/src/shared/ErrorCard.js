import React from 'react'

export default function ErrorCard({ error }) {
  return (
    <div className='text-red-500 p-6 rounded-sm bg-red-500/20 text-center my-4'>{error || "Something went wrong!!"}</div>
  )
}
