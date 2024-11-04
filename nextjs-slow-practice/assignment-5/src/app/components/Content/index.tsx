import Image from 'next/image'
import React from 'react'

const Content = () => {
    return (
        <div
            className="flex bg-white h-screen justify-center items-center px-20"
        >
            <div
                className="flex flex-2 bg-white text-black font-libre"
            >
                <div
                    className="flex-1 space-y-5"
                >
                    <h1
                        className="uppercase text-[37px]"
                    >
                        <span className="block">impeccable</span>
                        <span className="block">craftsmanship and</span>
                        <span className="block">finesse</span>
                    </h1>
                    <p
                        className="text-[29px] text-primary"
                    >An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
                    <button
                        className="bg-primary text-white px-10 py-2 rounded-lg text-2xl hover:scale-105 durtion-500 transition-all"
                    >Explore More</button>
                </div>
                <div
                    className="flex flex-1 justify-end relative"
                >
                    <div
                        className="border border-white h-[450px] w-[50%] absolute right-6 top-7 rounded-tl-[25%] rounded-br-[25%]"
                    ></div>
                    {/* <Image src="/assets/images/jeweller-girl.png" height={200} width={200} /> */}
                    <Image src="/assets/images/jeweller-girl.png" width={381} height={526} />
                </div>
            </div>
        </div>
    )
}

export default Content
