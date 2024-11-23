import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const Affiliation = () => {
    const carouselImages = ["carousel1.svg", "carousel2.svg", "carousel3.svg", "carousel5.svg", "carousel6.svg", "carousel7.svg"];
    return (
        <div>
            <div>
                <h1>Trusted by 2000+ companies worldwide.</h1>
            </div>
            <div className="w-full flex justify-center items-center">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    // className="w-full max-w-sm"
                    // className="w-full max-w-lg"
                    // className="w-[100%] max-w-sm"
                    // className="h-10 w-[100%]"
                    className="w-[80%]"
                >
                    <CarouselContent
                        className="w-[100%]"
                    >
                        {Array.from({ length: 5 }).map((_, index) => (
                            // <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <CarouselItem key={index} className="basis-1/5">
                                <div className="p-1">
                                    {/* <Card> */}
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <Image src={'/images/' + carouselImages[index + 1]} alt="logo" width={100} height={100} />
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

export default Affiliation
