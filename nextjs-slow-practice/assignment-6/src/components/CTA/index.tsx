import Image from 'next/image'
import React from 'react'

const CTA = () => {

    const CTAData = [
        { logo: 'pen-tool-2.svg', h1: 'Design & Development', p: '50+ Courses Available' },
        { logo: 'volume-high.svg', h1: 'Marketing', p: '50+ Courses Available' },
        { logo: 'link.svg', h1: 'Development', p: '50+ Courses Available' },
        { logo: 'microphone.svg', h1: 'Communication', p: '50+ Courses Available' },
        { logo: 'group.svg', h1: 'Digital Marketing', p: '50+ Courses Available' },
        { logo: 'arrow-2.svg', h1: 'Self Development', p: '50+ Courses Available' },
    ]

    return (
        <div>
            <h1>Explore Courses by Category</h1>
            <p>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
            <span
                // className="grid grid-flow-row grid-rows-5"
                // className="grid grid-flow-col grid-cols-3"
                // className="grid grid-cols-3 gap"
                // className="grid grid-cols-3 gap-4"
                className="grid grid-cols-5 gap-4"
            // className="grid grid-cols-3"
            >
                {CTAData.map(v => {
                    return (
                        <div
                            // className="flex justify-center bg-primary"
                            // className="flex justify-start bg-primary py-4"
                            // className="flex justify-start bg-primary"
                            // className="flex justify-start bg-primary h-16"
                            className="flex justify-start bg-primary h-18"
                        // className="grid"
                        // className="grid grid-col-3"
                        >
                            <div
                                className="flex items-center w-[40%]"
                            // className="flex items-center"
                            // className="bg-white flex items-center"
                            // className="bg-white flex justify-start"
                            >
                                <div
                                    // className="h-[100%] bg-white w-[30%]"
                                    // className="h-[100%] bg-white"
                                    // className="flex justify-center h-[100%] bg-white px-5 m-3"
                                    // className="flex justify-center  bg-white px-5 m-3"
                                    className="flex justify-center  bg-white px-5 py-3 m-3"
                                // className="h-screen bg-white w-[30%]"
                                // className="bg-white "
                                >
                                    <Image src={'/images/CTA/' + v.logo} alt={v.logo} width={30} height={30} />
                                </div>
                            </div>
                            <div
                                className="flex flex-col justify-center"
                            >
                                <h1
                                    className="font-bold"
                                >{v.h1}</h1>
                                <p
                                    className="text-base"
                                >{v.p}</p>
                            </div>
                        </div>
                    )
                })}
            </span >
            {/* <div
                className="flex justify-center bg-primary"
            >
                <div
                    className="bg-white flex items-center"
                >
                    logo
                </div>
                <div>
                    <h1
                        className="font-bold"
                    >Design & Development</h1>
                    <p
                        className="text-base"
                    >50+ Courses Available</p>
                </div> */}
        </div >
        // </div >
    )
}

export default CTA
