import Image from 'next/image'
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
    return (
        <div
            className="bg-primary flex justify-between items-center px-8 py-5"
        >
            <div>
                <Image src={"/assets/images/logo.png"} width={150} height={150} />
            </div>
            <div
                className="bg-white flex items-center px-3 rounded-lg py-2"
            >
                <input placeholder='Search the Gold Jewellery, Diamond Jewellery and more...'
                    className="w-[500px] focus:outline-none focus:border-none text-gray-500"
                />
                <IoSearch color="black" className='text-xl' />
            </div>
            <div>
                <ul className='flex space-x-3 text-3xl'>
                    <li className='text-3xl'><CiHeart /></li>
                    <li className='text-3xl'><CiUser /></li>
                    <li className='text-3xl'><IoCartOutline /></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
