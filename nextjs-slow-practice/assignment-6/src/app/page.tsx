import Affiliation from '@/components/Affiliation'
import CTA from '@/components/CTA'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import UpperNav from '@/components/UpperNav'
import React from 'react'

const Page = () => {
  return (
    <div>
      <span
        className="flex flex-col text-base bg-secondary"
      >
        <UpperNav />
        <Navbar />
        <Hero />
        <Affiliation />
        <CTA />
      </span>
    </div>
  )
}

export default Page
