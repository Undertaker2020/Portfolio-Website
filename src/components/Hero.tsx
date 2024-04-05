import {LogoBehance, LogoDeviantart, LogoDribbble, LogoFigma} from "react-ionicons";

const Hero = () => {
    return (
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="">
                    <LogoDribbble/>
                    <LogoDeviantart/>
                    <LogoBehance/>
                    <LogoFigma/>
                </div>
            </div>
        </div>
    );
};

export default Hero;