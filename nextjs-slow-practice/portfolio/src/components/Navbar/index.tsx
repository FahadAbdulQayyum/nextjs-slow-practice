import Image from 'next/image'
import Link from 'next/link'

const Navbar: any = () => {
    return (
        <div
            className="bg-primary text-proPrimary flex justify-between items-center px-lg"
        >
            <div
                className="h-20 overflow-hidden"
            >
                <Image src={'/assets/images/f-logo0.png'} width={150} height={150}
                    className="relative -left-12 -top-6"
                    alt="logo"
                />
            </div>
            <div
                className="space-x-8"
            >
                <Link href="/Home">Home</Link>
                <Link href="/About">About Us</Link>
                <Link href="/Contact">Contact Us</Link>
                <Link href="/Services">Services</Link>
            </div>
        </div>
    )
}

export default Navbar
