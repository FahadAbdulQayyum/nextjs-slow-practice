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
            {CTAData.map(v => {
                return (
                    <>
                        <div
                            className="flex justify-center bg-primary"
                        >
                            <div
                                className="bg-white flex items-center"
                            >
                                <Image src={'/images/CTA/' + v.logo} alt={v.logo} width={100} height={100} />
                            </div>
                            <div>
                                <h1
                                    className="font-bold"
                                >{v.h1}</h1>
                                <p
                                    className="text-base"
                                >{v.p}</p>
                            </div>
                        </div>
                    </>
                )
            })}
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
