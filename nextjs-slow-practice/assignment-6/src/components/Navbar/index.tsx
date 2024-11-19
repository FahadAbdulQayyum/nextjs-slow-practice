import React from 'react'

const Navbar = () => {
    return (
        <div
            className="flex px-standard justify-between bg-primary text-black py-2"
        >
            <div>Logo</div>
            <div
                className="flex bg-gray-50"
            >
                <ul
                    className="flex space-x-2"
                // className="flex justify-between"
                >
                    <li>Home</li>
                    <li>Courses</li>
                    <li>Services</li>
                    <li>Achievement</li>
                    <li>About Us</li>
                    <li>Testominial</li>
                </ul>
            </div>
            <div
                className="space-x-3"
            >
                <button
                    className="border border-gray-400 rounded-lg text-black px-4 py-2"
                >Login</button>
                <button
                    className="border rounded-lg bg-black text-white px-4 py-2"
                >Sign Up</button>
            </div>
        </div >
    )
}

export default Navbar
