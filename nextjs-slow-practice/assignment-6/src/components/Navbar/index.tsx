import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div
            className="flex px-standard justify-between bg-primary text-black py-2"
        >
            <div>
                <Image src={"/images/dsgnrlogo.svg"}
                    width={130.6}
                    height={41}
                    alt="logo"
                />
            </div>

            <div
                // className="space-x-3"
                // className="flex justify-center"
                className="flex items-center "
            >
                <div
                    className="flex bg-gray-200"
                >
                    <ul
                        className="flex space-x-16 items-center bg-white"
                    // className="flex justify-between"
                    >
                        <li>Home</li>
                        <li>Courses</li>
                        <li>Services</li>
                        <li>Achievement</li>
                        <li>About Us</li>
                        <li>Testominial</li>
                        <li>
                            <button
                                className="border border-gray-400 rounded-lg text-black px-4 py-2"
                            >Login</button>
                            <button
                                className="border rounded-lg bg-black text-white px-4 py-2"
                            >Sign Up</button>
                        </li>
                    </ul>
                </div>

            </div>
        </div >
    )
}

export default Navbar
