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
    // const testimonialInfo = ["carousel1.svg", "carousel2.svg", "carousel3.svg", "carousel5.svg", "carousel6.svg", "carousel7.svg"];
    // const testimonialInfo = [
    //     ["Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor",],
    //     ["james.svg", "james.svg", "james.svg",],
    //     ["James Nduku", "James Nduku", "James Nduku", "James Nduku",],
    //     ["Software Developer", "Software Developer", "Software Developer", "Software Developer",],
    // ];
    const testimonialInfo = [
        ["Lorem ipsum dolor0", "james.svg", "James Nduku0", "Software Developer0"],
        ["Lorem ipsum dolor1", "james.svg", "James Nduku1", "Software Developer1"],
        ["Lorem ipsum dolor2", "james.svg", "James Nduku2", "Software Developer2"],
        ["Lorem ipsum dolor3", "james.svg", "James Nduku3", "Software Developer3"],
    ];
    const testimonialInfo1 = [
        // ["Lorem ipsum dolor0", "james.svg", "James Nduku0", "Software Developer0"],
        { desc: "Lorem ipsum dolor0", img: 'james.svg', name: 'James Nduku0', dept: 'Software Developer0' },
        { desc: "Lorem ipsum dolor1", img: 'james.svg', name: 'James Nduku1', dept: 'Software Developer1' },
        { desc: "Lorem ipsum dolor2", img: 'james.svg', name: 'James Nduku2', dept: 'Software Developer2' },
    ];
    // const testimonialInfo = [
    //     {
    //         stars: "5",
    //         name: "James Nduku",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    //         image: "james.svg",
    //         dept: "Software Developer"
    //     },
    // {
    //     stars: "5",
    //     name: "Erick Kipkemboi",
    //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    //     image: "Erick.svg",
    //     dept: "Scrum Master"
    // },
    // {
    //     stars: "5",
    //     name: "Stephen Kerubo",
    //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    //     image: "stephen.svg",
    //     dept: "UI/UX Designer"
    // },
    // {
    //     stars: "5",
    //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    //     image: "james.svg",
    //     dept: "Software Developer"
    // },
    // ];


    return (
        // <div className="flex justify-center items-center px-4">
        <div className="flex flex-col ">
            <span
                // className="flex flex-col justify-center items-center"
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
                    // className="w-[100%] max-w-sm"
                    className="w-[80%]"
                >
                    <CarouselContent
                        className="w-[100%]"
                    >
                        {Array.from({ length: 5 }).map((_, index) => (
                            // <CarouselItem key={index} className="basis-1/5">
                            <CarouselItem key={index + index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    {/* <Card> */}
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        {/* {testimonialInfo.map(v => {
                                            return  */}
                                        <div
                                            // className="flex flex-col"
                                            // className="flex flex-col border border-black p-4 space-y-4"
                                            className="flex flex-col border border-black p-6 space-y-6"
                                        >
                                            <span
                                                className="flex"
                                            >
                                                <BsStarFill color="black" />
                                                {/* <p>{index}</p> */}
                                                {/* <p>{testimonialInfo[index][0]}</p> */}
                                                {/* <p>{testimonialInfo[index][1]}</p> */}
                                                {/* <p>{testimonialInfo[1][index]}</p> */}
                                                {/* <p>{testimonialInfo[0][0]}</p> */}
                                                {/* <p>{testimonialInfo[index + 1][0]}</p> */}
                                                {/* <p>{testimonialInfo[0][index + 1]}</p> */}
                                                <p>{testimonialInfo1[index]?.dept}</p>
                                                <BsStarFill color="black" />
                                                <BsStarFill color="black" />
                                                <BsStarFill color="black" />
                                                <BsStarFill color="black" />
                                            </span>
                                            <span>
                                                <p>
                                                    {/* {"\"" + testimonialInfo[index][0] + "\""} */}
                                                    {/* {"\"" + testimonialInfo[0][index] + "\""} */}
                                                    {/* {"\"" + testimonialInfo[0][index + 0] + "\""} */}
                                                    {/* {"\"" + testimonialInfo[0][index + 0] + "\""} */}
                                                    {"\"" + testimonialInfo1[index]?.desc + "\""}
                                                    {/* "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare." */}

                                                </p>
                                            </span>
                                            <span
                                                // className="flex items-center justify-between"
                                                className="flex items-center"
                                            >
                                                <span
                                                    className="rounded-full"
                                                >
                                                    {/* <Image src={'/images/' + testimonialInfo[index + 1]} alt="logo" width={100} height={100} /> */}
                                                    <Image
                                                        className="rounded-full"
                                                        // src={'/images/Teams/' + v.image} alt={v.image} width={50} height={50} />
                                                        // src={'/images/Teams/' + testimonialInfo[index][1]} alt={testimonialInfo[index][1]} width={50} height={50} />
                                                        // src={'/images/Teams/' + testimonialInfo[index][1]} alt={testimonialInfo[0][0]} width={50} height={50} />
                                                        // src={'/images/Teams/' + testimonialInfo[0][index + 1]} alt={testimonialInfo[0][index]} width={50} height={50} />
                                                        src={'/images/Teams/' + testimonialInfo1[index]?.img} alt={testimonialInfo1[index]?.img} width={50} height={50} />
                                                    {/* src={'/images/Teams/' + testimonialInfo[0][index]} alt={testimonialInfo[0][index]} width={50} height={50} /> */}
                                                </span>
                                                <span
                                                    className="ml-4"
                                                >
                                                    <h1
                                                        className="font-bold text-sm"
                                                    >
                                                        {/* {testimonialInfo[index][2]} */}
                                                        {/* {testimonialInfo[0][index]} */}
                                                        {/* {testimonialInfo[0][index + 2]} */}
                                                        {testimonialInfo1[index]?.name}
                                                    </h1>
                                                    <p
                                                        className="text-sm"
                                                    >
                                                        {/* {testimonialInfo[index][3]} */}
                                                        {/* {testimonialInfo[0][index]} */}
                                                        {/* {testimonialInfo[0][index + 3]} */}
                                                        {testimonialInfo1[index]?.dept}
                                                    </p>
                                                </span>

                                            </span>
                                        </div>
                                        {/* })} */}
                                    </CardContent>
                                    {/* </Card> */}
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
