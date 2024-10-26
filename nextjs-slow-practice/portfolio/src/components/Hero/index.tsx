import Image from 'next/image'
import React from 'react'
import { GrGithub } from 'react-icons/gr'
import { ImFacebook } from 'react-icons/im'
import { LiaLinkedinIn } from 'react-icons/lia'

const Hero = () => {
    return (
        <div className="bg-primary px-lg">
            <div
                className="flex justify-between"
            >
                <div
                    className="text-6xl text-black"
                >
                    <h1>Hi,</h1>
                    <h1>I'm <span
                        className="text-proPrimary"
                    >Fahad</span></h1>
                    <h1>Web Developer</h1>
                    <button
                        className="text-3xl bg-proPrimary text-white px-lg py-2xs rounded-lg hover:scale-105 duration-500"
                    >Connect</button>
                </div>
                <div>
                    <Image src="/assets/images/prof.png" alt="profile" height={400} width={400} />
                </div>
            </div>
            <span
                className="flex space-x-2 pb-5"
            >
                <div
                    className="border border-proPrimary rounded-full h-8 w-8 flex justify-center items-center overflow-hidden"
                >
                    <GrGithub className='text-proPrimary text-2xl hover:scale-75 duration-500 hover:cursor-pointer' />
                </div>
                <div
                    className="border border-proPrimary rounded-full h-8 w-8 flex justify-center items-center overflow-hidden"
                >
                    <LiaLinkedinIn className='text-proPrimary text-2xl hover:scale-75 duration-500 hover:cursor-pointer' />
                </div>
                <div
                    className="border border-proPrimary rounded-full h-8 w-8 flex justify-center items-center overflow-hidden"
                >
                    <ImFacebook className='text-proPrimary text-2xl hover:scale-75 duration-500 hover:cursor-pointer' />
                </div>
            </span>
        </div>
    )
}

export default Hero