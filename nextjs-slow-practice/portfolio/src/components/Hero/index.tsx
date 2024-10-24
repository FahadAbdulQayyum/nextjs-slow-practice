import React from 'react'

const Hero = () => {
    return (
        <div>
            <div
                className="bg-proHighlight h-80 flex p-5"
            >
                <h1
                    className="text-3xl"
                >Get Your Quality Product Built Here For
                    <span
                        className='bg-proPrimary'
                        style={{
                            clipPath: 'polygon(0 10%, 100% -10%, 100% 94%, 0 100%)',
                            // clipPath: 'polygon(0 59%, 100% 48%, 100% 84%, 0 94%)',
                        }}
                    >
                        Better Future
                    </span>
                    Business.</h1>
            </div>
        </div>
    )
}

export default Hero
