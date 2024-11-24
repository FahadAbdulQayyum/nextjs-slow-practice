import Image from 'next/image'
import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { CiLinkedin } from 'react-icons/ci'
import { FaFacebook } from 'react-icons/fa6'
import { FiTwitter } from 'react-icons/fi'

const Footer = () => {
    return (
        <div
        className="px-standard"
        >
            <div
                className="flex justify-between"
            >
                <span>
                    <Image src={"/images/dsgnrlogo.svg"} alt="logo" width={100} height={100} />
                </span>
                <span>
                    <h1
                        className="font-bold"
                    >Courses</h1>
                    <ul
                        className="space-y-4 mt-4"
                    >
                        <li>Business</li>
                        <li>Development</li>
                        <li>Technology</li>
                        <li>Design</li>
                        <li>Programming</li>
                    </ul>
                </span>
                <span>
                    <h1
                        className="font-bold"
                    >Resources</h1>
                    <ul
                        className="space-y-4 mt-4"
                    >
                        <li>Career</li>
                        <li>Resume</li>
                        <li>Learning</li>
                        <li>Interview Preparation</li>
                        <li>Jobs</li>
                    </ul>
                </span>
                <span>
                    <h1
                        className="font-bold"
                    >About Us</h1>
                    <ul
                        className="space-y-4 mt-4"
                    >
                        <li>Contact</li>
                        <li>Help/Support</li>
                        <li>FAQ</li>
                        <li>Terms and Conditions</li>
                        <li>Partners</li>
                    </ul>
                </span>
            </div>
            <div
                className="border border-black my-5"
            ></div>
            <div
                className="flex justify-between"
            >
                <span
                    className="flex justify-between w-[50%]"
                >
                    <p>2023 Ddsgnr. All right reserved.</p>
                    <a
                    className="underline"
                    >Privacy Policy</a>
                    <a
                    className="underline"
                    >Terms of Service</a>
                    <a
                    className="underline"
                    >Cookies Settings</a>
                </span>
                <span
                    className="flex space-x-2"
                >
                    <FaFacebook />
                    <BsInstagram />
                    <FiTwitter />
                    <CiLinkedin />
                </span>
            </div>
        </div>
    )
}

export default Footer
