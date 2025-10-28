import Spline from "@splinetool/react-spline";
import { GoLinkExternal } from "react-icons/go";
import { IoDiamond } from "react-icons/io5";

const Hero = () => {
    return (
        <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
            <div data-aos="fade-right" data-aos-duration="2000" className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0">
                <div className="relative w-[95%] sm:w-48 h-10 bg-linear-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(225, 225, 225, 0.4)] rounded-full">
                    <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1">
                        <IoDiamond />
                        INTRODUCING
                    </div>
                </div>

                {/* heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8">EMAIL FOR
                    <br />
                    DEVELOPERS
                </h1>
                {/* Descriptions */}
                <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, suscipit! Dolorum, possimus!</p>

                {/* buttons */}
                <div className="flex gap-4 mt-12">
                    <a className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] flex items-center gap-1" href="#">
                        <span>Documentations</span>
                        <GoLinkExternal />
                    </a>

                    <a className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] text-black bg-gray-300 hover:text-white  flex items-center gap-1" href="#">
                        <span>Get Started</span>
                        <GoLinkExternal />
                    </a>
                </div>

            </div>

            {/* 3d model */}

            <Spline data-aos="zoom-in-down" data-aos-duration="3000" className="absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%]" scene="https://prod.spline.design/jFw5Bpq5PdkeTlNn/scene.splinecode" />

        </main>
    );
};

export default Hero;