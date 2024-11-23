import React from 'react'

const CTA = () => {
    return (
        <div>
            <h1>Explore Courses by Category</h1>
            <p>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
            <div
                // className="flex justify-center items-center bg-primary"
                className="flex justify-center bg-primary"
            // className="grid grid-flow-col"
            >
                <div
                    // className="bg-white h-full"
                    // className="bg-white h-[100%]"
                    className="bg-white"
                // className="bg-white h-[100px]"
                // className="bg-white h-screen"
                >logo</div>
                <div>
                    <h1
                        className="font-bold"
                    >Design & Development</h1>
                    <p
                        className="text-base"
                    >50+ Courses Available</p>
                </div>
            </div>
        </div>
    )
}

export default CTA
