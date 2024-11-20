import Navbar from '@/components/Navbar'
import UpperNav from '@/components/UpperNav'
import React from 'react'

const Page = () => {
  return (
    <div>
      <span
        className="flex flex-col text-lg"
      >
        <UpperNav />
        <Navbar />
      </span>
    </div>
  )
}

export default Page
