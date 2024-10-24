import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div
            className="bg-proPrimary flex justify-between items-center"
        >
            <div
                className="h-20 overflow-hidden"
            >
                <Image src={'/assets/images/f-logo.png'} width={200} height={200}
                    className="relative -left-10 -top-5"
                />
            </div>
            <div
                className="space-x-8"
            >
                <Link href="/">Home</Link>
                <Link href="/">About Us</Link>
                <Link href="/">Contact Us</Link>
                <Link href="/">Services</Link>
            </div>
            <div></div>
        </div>
    )
}

export default Navbar
