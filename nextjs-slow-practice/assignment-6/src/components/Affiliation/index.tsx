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
    return (
        <div>
            <div>
                <h1>Trusted by 2000+ companies worldwide.</h1>
            </div>
            <div>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full max-w-sm"
                >
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            {/* <Image src={"/images/dsgnrlogo.svg"} alt="logo" width={100} height={100} /> */}
                                            {/* <Image src={`/images/carousel{index+1}.svg`} alt="logo" width={100} height={100} /> */}
                                            <Image src={`/images/carousel{1}.svg`} alt="logo" width={100} height={100} />
                                            {/* <span className="text-3xl font-semibold">{index + 1}</span> */}
                                        </CardContent>
                                    </Card>
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
