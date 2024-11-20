import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div
            className="flex justify-center items-center bg-white"
        >
            <div className="ml-standard">
                <h1
                    className="text-black text-6xl font-bold"
                >Learn new skills online with ease</h1>
                <p
                    className="text-black"
                >Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
                <button>Start learning now</button>
                <button>Explore Courses</button>
            </div>
            <div>
                <Image src={"/images/hero.svg"} width="900" height="900" alt="hero" />
            </div>
        </div >
    )
}

export default Hero
