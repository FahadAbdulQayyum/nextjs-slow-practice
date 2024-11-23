import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div
            className="flex justify-center items-center bg-white"
        >
            {/* <div className="ml-standard w-[600px] space-y-4 w-1/2"> */}
            <div className="ml-standard space-y-4 w-1/2">
                <h1
                    className="text-black text-6xl font-bold w-[500px]"
                >Learn new skills online with ease</h1>
                <p
                    className="text-black w-[500px] text-base"
                >Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
                <div
                    className="space-x-2"
                >
                    <button
                        className="bg-black text-white p-2 rounded-lg"
                    >Start learning now</button>
                    <button
                        className="border border-black bg-white text-black p-2 rounded-lg"
                    >Explore Courses</button>
                </div>
            </div>
            <div className="w-1/2">
                <Image src={"/images/hero.svg"} width="900" height="900" alt="hero" />
            </div>
        </div >
    )
}

export default Hero
