import React from "react";
import { FaComputer, FaLaptopCode } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";

const services = [
    {
        step: "01",
        name: "Web Developer",
        Icon:
            FaComputer,
        description:
            "I build well-designed and developed website.",
        classs: "text-9xl"
    },
    {
        step: "02",
        name: "Software Developer",
        Icon:
            FaLaptopCode,
        description:
            "I build quality software application using ReactJs.",
        classs: "text-9xl"
    },
    {
        step: "03",
        name: "Graphic Designer",
        Icon:
            MdDesignServices,
        description:
            "I personally love to explore the nature of beautify and experience.",
        classs: "text-9xl"
    },
];

const Practice = () => {
    return (
        <section
            className="bg-proPrimary"
        >
            <div
                className="flex justify-center"
            >
                <div className="flex justify-center object-center flex-col gap-12 sm:gap-16">
                    <div
                        className="flex space-x-36 py-5"
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
                                            className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden] bg-primary text-proPrimary flex justify-center items-center"
                                        >
                                            {Icon && (
                                                <Icon className={classs} />
                                            )}
                                        </div>
                                        {/* Back face with text */}
                                        <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                            <div className="flex min-h-full flex-col items-center justify-center">
                                                <h2 className="text-2xl font-bold mb-4">
                                                    {name}
                                                </h2>
                                                <p className="text-lg text-pretty text-center mb-4 ">
                                                    {description}
                                                </p>
                                                <a href="tel:+923232846250" className="inline-flex">
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