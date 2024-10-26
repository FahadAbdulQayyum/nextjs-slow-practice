import Image from 'next/image'
import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { CiLinkedin } from 'react-icons/ci'
import { DiGithub } from 'react-icons/di'
import { FaBeer } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'
import { FiGithub } from 'react-icons/fi'
import { GrGithub } from 'react-icons/gr'
import { ImFacebook } from 'react-icons/im'
import { LiaLinkedin } from 'react-icons/lia'

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
                    {/* <Image src="/assets/images/profile.avif" height={100} width={100} /> */}
                    <Image src="/assets/images/prof.png" height={400} width={400} />
                </div>
            </div>
            <span
                className="flex space-x-2"
            >
                <div
                    className="border border-proPrimary rounded-full h-8 w-8 flex justify-center items-center overflow-hidden"
                >
                    <GrGithub className='text-proPrimary text-3xl hover:scale-75 duration-500 hover:cursor-pointer' />
                </div>
                <div
                    className="border border-proPrimary rounded-full h-8 w-8 flex justify-center items-center overflow-hidden"
                >
                    <BsLinkedin className='bg-proPrimary text-3xl hover:scale-75 duration-500 hover:cursor-pointer' />
                </div>
                <div
                    className="border border-proPrimary rounded-full h-8 w-8 flex justify-center items-center overflow-hidden"
                >
                    <ImFacebook className='text-proPrimary text-3xl hover:scale-75 duration-500 hover:cursor-pointer' />
                </div>
            </span>
        </div>
    )
}

export default Hero















// import React from 'react'

// const Hero = () => {
//     return (
//         <div>
//             <div
//                 // className="bg-proHighlight h-80 flex p-5"
//                 className="bg-primary h-screen flex p-5"
//             // className="bg-proHighlight h-screen flex p-5"
//             >
//                 <h1
//                     className="text-3xl text-proPrimary"
//                 >Get Your Quality Product Built Here For
//                     <span
//                         className='bg-proPrimary text-primary'
//                         // className='text-primary'
//                         style={{
//                             clipPath: 'polygon(0 10%, 100% -10%, 100% 94%, 0 100%)',
//                             // clipPath: 'polygon(0 59%, 100% 48%, 100% 84%, 0 94%)',
//                         }}
//                     >
//                         Better Future
//                     </span>
//                     Business.</h1>
//             </div>
//         </div>
//     )
// }

// export default Hero
