import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { BsSkipStartFill, BsStar, BsStarFill } from "react-icons/bs";

const Testimonial = () => {
    const testimonialInfo = [
        { desc: "Lorem ipsum dolor0", img: 'james.svg', name: 'James Nduku0', dept: 'Software Developer0' },
        { desc: "Lorem ipsum dolor1", img: 'james.svg', name: 'James Nduku1', dept: 'Software Developer1' },
        { desc: "Lorem ipsum dolor2", img: 'james.svg', name: 'James Nduku2', dept: 'Software Developer2' },
    ];
    return (
        <div className="flex flex-col ">
            <span
                className="flex flex-col justify-start items-start"
            >
                <h1
                    className="text-3xl font-bold"
                >Customer testimonials</h1>
                <p
                    className="text-base"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </span>
            <div className="w-full flex justify-center items-center">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-[80%]"
                >
                    <CarouselContent
                        className="w-[100%]"
                    >
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index + index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <div
                                            className="flex flex-col border border-black p-6 space-y-6"
                                        >
                                            <span
                                                className="flex"
                                            >
                                                <BsStarFill color="black" />
                                                <BsStarFill color="black" />
                                                <BsStarFill color="black" />
                                                <BsStarFill color="black" />
                                                <BsStarFill color="black" />
                                            </span>
                                            <span>
                                                <p>
                                                    {"\"" + testimonialInfo[index]?.desc + "\""}
                                                </p>
                                            </span>
                                            <span
                                                className="flex items-center"
                                            >
                                                <span
                                                    className="rounded-full"
                                                >
                                                    <Image
                                                        className="rounded-full"
                                                        src={'/images/Teams/' + testimonialInfo[index]?.img} alt={testimonialInfo[index]?.img} width={50} height={50} />
                                                </span>
                                                <span
                                                    className="ml-4"
                                                >
                                                    <h1
                                                        className="font-bold text-sm"
                                                    >
                                                        {testimonialInfo[index]?.name}
                                                    </h1>
                                                    <p
                                                        className="text-sm"
                                                    >
                                                        {testimonialInfo[index]?.dept}
                                                    </p>
                                                </span>

                                            </span>
                                        </div>
                                    </CardContent>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div >
    )
}

export default Testimonial