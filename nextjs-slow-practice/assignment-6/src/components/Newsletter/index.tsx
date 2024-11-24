import React from 'react'

const Newsletter = () => {
    return (
        <div
            className="flex justify-between px-standard"
        >
            <div>
                <h1
                    className="font-bold"
                >Subscribe to our newsletter</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div
                className="flex flex-col space-y-3"
            >
                <span
                    className="space-x-2"
                >
                    <input
                        className="border border-black rounded-lg p-2 px-4"
                        placeholder='Enter your email' />
                    <button
                        className="border border-black rounded-lg p-2 px-4"
                    >Subscribe</button>
                </span>
                <span
                    className="text-sm"
                >By subscribing you agree to with our <a
                    className="underline"
                >Privacy Policy</a> </span>
            </div>
        </div>
    )
}

export default Newsletter
