import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div
            className="navbar"
        >
            <div className="logo">
                <Image src={"/assets/images/f-logo0.png"} width={80} height={80} alt="logo" />
            </div>
            <div className="menu">
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                    <li><Link href="/services">Services</Link></li>
                </ul>
            </div>
        </div >
    )
}

export default Navbar
