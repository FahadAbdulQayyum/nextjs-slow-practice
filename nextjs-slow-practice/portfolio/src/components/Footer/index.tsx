import Image from 'next/image'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div
            className="bg-primary py-10 text-proPrimary "
        >
            <div
                className="flex justify-between px-lg"
            >
                <div
                    className="h-20 overflow-hidden"
                >
                    <Image src={'/assets/images/f-logo0.png'} width={150} height={150}
                        className="relative -left-12 -top-6"
                        alt="logo"
                    />
                </div>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Services</li>
                    </ul>
                </div>
            </div>
            <div
                className="flex justify-center items-center"
            >
                © {currentYear} All rights reserved. Designed by<span className="text-btnColor font-bold">&nbsp;Fahad Abdul Qayyum</span>
            </div>
        </div >
    )
}

export default Footer
