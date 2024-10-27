import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className="footer">
            <div className="img">
                <Image className='imgg' src="/assets/images/f-logo0.png" alt="profile" height={100} width={100} />
            </div>
            <div className="footer menu">
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                    <li><Link href="/services">Services</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
