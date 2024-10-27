import Image from 'next/image'
import React from 'react'
import { GrGithub } from 'react-icons/gr'
import { ImFacebook } from 'react-icons/im'
import { LiaLinkedinIn } from 'react-icons/lia'

const Hero = () => {
    return (
        <div className="">
            <div
                className="hero"
            >
                <div
                    className="info"
                >
                    <h1>Hi,</h1>
                    <h1>I&apos;m <span
                        className=""
                    >Fahad</span></h1>
                    <h1>Web Developer</h1>
                    <button
                        className=""
                    >Connect</button>
                </div>
                <div>
                    <Image src="/assets/images/prof.png" alt="profile" height={400} width={400} />
                </div>
            </div>
            <span
                className="link"
            >
                <div
                    className=""
                >
                    <a href="https://github.com/FahadAbdulQayyum" target='_blank'>
                        <GrGithub className='icon' />
                    </a>
                </div>
                <div
                    className=""
                >
                    <a href="https://linkedin.com/in/fahad-abdul-qayyum-bb11a3243" target='_blank'>
                        <LiaLinkedinIn className='icon' />
                    </a>
                </div>
                <div
                    className=""
                >
                    <a href="https://facebook.com/profile.php?id=100042010622200" target='_blank'>
                        <ImFacebook className='icon' />
                    </a>
                </div>
            </span>
        </div>
    )
}

export default Hero