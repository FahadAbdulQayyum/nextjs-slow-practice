import Link from "next/link"

const Page = () => {
  return (
    <div>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">Abount Us</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/services/web"> - Web Develpment</Link></li>
        <li><Link href="/services/app"> - App Develpment</Link></li>
      </ul>
    </div >
  )
}

export default Page
