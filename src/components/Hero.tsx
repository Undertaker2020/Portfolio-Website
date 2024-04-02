import {LogoBehance, LogoDeviantart, LogoDribbble, LogoFigma} from "react-ionicons";

const Hero = () => {
    return(
        <div className="hero w-full h-screen flex items-center justify-center
                        md:px-[250px] px-5 relative">
            <div className="flex w-full flex-col gap-8 z-50 items-center
                            justify-center fixed top-[50%] left-[50%]
                            traslate-y-[-50% ]">
                <span className="md:text-4xl text-3xl font-semibold text-orange-100">
                    Hi, I'm Ilya
                </span>
                <span className="md:text-7xl text-6xl font-semibold text-orange-200">
                    Fullstack JS Developer
                </span>
                <p className="text-orange-200 md:max-w-[600px] max-w-[450px]
                                leading-7 text-center">
                </p>
                </div>
            </div>
        </div>
    )
};

export default Hero;