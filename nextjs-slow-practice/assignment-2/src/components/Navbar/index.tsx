import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div
            className="navbar"
        >
            <div>Logo</div>
            <div>
                <ul className="menu">
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
