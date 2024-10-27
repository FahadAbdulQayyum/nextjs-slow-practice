import { FaComputer, FaLaptopCode } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";

const Services = () => {
    return (
        <div className='serv'>
            <div
                className="services"
            >
                <span className="box">
                    <span className="icon">
                        <FaComputer className="iconn" />
                    </span>
                    <span> Web Development</span>
                </span>
                <span className="box">
                    <span className="icon">
                        <FaLaptopCode className="iconn" />
                    </span>
                    <span>App Development</span>
                </span>
                <span className="box">
                    <span className="icon">
                        <MdDesignServices className="iconn" />
                    </span>
                    <span>Data Analytics</span>
                </span >
            </div >
        </div >
    )
}

export default Services
