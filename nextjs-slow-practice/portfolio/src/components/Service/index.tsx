import React from "react";
import { FaComputer, FaLaptopCode } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";

const services = [
    {
        step: "01",
        name: "Web Developer",
        Icon:
            // "FaComputer",
            FaComputer,
        description:
            "I build well-designed and developed website.",
        classs: "text-9xl"
    },
    {
        step: "02",
        name: "Software Developer",
        Icon:
            // "FaComputer",
            FaLaptopCode,
        description:
            "I build quality software application using ReactJs.",
        classs: "text-9xl"
    },
    {
        step: "03",
        name: "Graphic Designer",
        Icon:
            // "FaComputer",
            MdDesignServices,
        description:
            "I personally love to explore the nature of beautify and experience.",
        classs: "text-9xl"
    },
];

const Practice = () => {
    return (
        <section
            className="bg-proPrimary px-lg"
        >
            <div>
                <div className="flex justify-center object-center flex-col gap-12 sm:gap-16">
                    <div
                        className="flex space-x-8 py-5"
                    >
                        {
                            services.map(({ name, Icon, description, classs }) => (
                                <div
                                    key={name}
                                    className="group h-60 w-96 [perspective:1000px]"
                                >
                                    <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                        {/* Front face with image */}
                                        <div
                                            // className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden] bg-proPrimary flex justify-center items-center"
                                            className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden] bg-primary text-proPrimary flex justify-center items-center"
                                        >
                                            {Icon && (
                                                <Icon className={classs} />
                                            )}
                                        </div>
                                        {/* Back face with text */}
                                        <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                            <div className="flex min-h-full flex-col items-center justify-center">
                                                <h2 className="text-2xl font-bold mb-4">
                                                    {name}
                                                </h2>
                                                <p className="text-lg text-pretty text-center mb-4 ">
                                                    {description}
                                                </p>
                                                <a href="tel:+923232846250" className="inline-flex">
                                                    {/* <button className="my-2 bg-yellow-800 hover:bg-btnColor text-white font-bold py-2 px-4 w-auto rounded-full inline-flex items-center"> */}
                                                    <button className="my-2 bg-btnColor text-white font-bold py-2 px-4 w-auto rounded-full inline-flex items-center">
                                                        <span>Schedule Service</span>
                                                        {/* <WrenchScrewdriverIcon className="h-6 w-6 ml-2" /> */}
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Practice;











// import { FaComputer } from "react-icons/fa6";

// const Service = () => {
//     return (
//         <div>
//             <div
//                 className="bg-proPrimary flex justify-between px-lg"
//             >
//                 <span
//                     // className="bg-proNeutral p-20 my-5 rounded hover:scale-105 duration-500 hover:cursor-pointer relative"
//                     className="bg-proNeutral p-20 my-5 rounded hover:scale-105 duration-500 hover:cursor-pointer upInfo"
//                 >
//                     <span className="flex justify-between">
//                         <div
//                             // className="border border-proPrimary rounded-full h-8 w-8 flex justify-center items-center overflow-hidden absolute top-2 left-2"
//                             className="border border-proPrimary rounded-full h-8 w-8 flex justify-center items-center overflow-hidden"
//                         // className="border border-proPrimary rounded-full h-8 w-12 flex justify-center items-center overflow-hidden"
//                         >
//                             <FaComputer className='text-proPrimary text-2xl hover:scale-75 duration-500 hover:cursor-pointer' />
//                         </div>
//                         <div
//                             className="info"
//                         >
//                             <p> Hello I'm Fahad</p>
//                         </div>
//                     </span>
//                 </span>
//                 <span
//                     className="bg-proNeutral p-20 my-5 rounded hover:scale-105 duration-500 hover:cursor-pointer"
//                 >Service 1</span>
//                 <span
//                     className="bg-proNeutral p-20 my-5 rounded hover:scale-105 duration-500 hover:cursor-pointer"
//                 >Service 2</span>
//                 <span
//                     className="bg-proNeutral p-20 my-5 rounded hover:scale-105 duration-500 hover:cursor-pointer"
//                 >Service 3</span>
//             </div>
//         </div>
//     )
// }

// export default Service
