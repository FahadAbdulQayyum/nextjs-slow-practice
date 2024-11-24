import Achievement from '@/components/Achievement'
import Affiliation from '@/components/Affiliation'
import CTA from '@/components/CTA'
import Courses from '@/components/Courses'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Team from '@/components/Team'
import Testimonial from '@/components/Testimonial'
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
        <Achievement />
        <Courses />
        <Team />
        <Testimonial />
      </span>
    </div>
  )
}

export default Page
