import { FaComputer } from "react-icons/fa6";

const Service = () => {
    return (
        <div>
            <div
                className="bg-proPrimary flex justify-between px-lg"
            >
                <span
                    // className="bg-proNeutral p-20 my-5 rounded hover:scale-105 duration-500 hover:cursor-pointer relative"
                    className="bg-proNeutral p-20 my-5 rounded hover:scale-105 duration-500 hover:cursor-pointer upInfo"
                >
                    <span className="flex justify-between">
                        <div
                            // className="border border-proPrimary rounded-full h-8 w-8 flex justify-center items-center overflow-hidden absolute top-2 left-2"
                            className="border border-proPrimary rounded-full h-8 w-8 flex justify-center items-center overflow-hidden"
                        // className="border border-proPrimary rounded-full h-8 w-12 flex justify-center items-center overflow-hidden"
                        >
                            <FaComputer className='text-proPrimary text-2xl hover:scale-75 duration-500 hover:cursor-pointer' />
                        </div>
                        <div
                            className="info"
                        >
                            <p> Hello I'm Fahad</p>
                        </div>
                    </span>
                </span>
                <span
                    className="bg-proNeutral p-20 my-5 rounded hover:scale-105 duration-500 hover:cursor-pointer"
                >Service 1</span>
                <span
                    className="bg-proNeutral p-20 my-5 rounded hover:scale-105 duration-500 hover:cursor-pointer"
                >Service 2</span>
                <span
                    className="bg-proNeutral p-20 my-5 rounded hover:scale-105 duration-500 hover:cursor-pointer"
                >Service 3</span>
            </div>
        </div>
    )
}

export default Service
