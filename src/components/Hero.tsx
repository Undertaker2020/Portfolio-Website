import {
    LogoInstagram,
    LogoGithub,
    LogoLinkedin,
    LogoFigma
} from "react-ionicons";
import Navbar from "./Navbar.tsx";

const Hero = () => {
    return (
        <div className="hero w-full h-screen flex items-center justify-center
                        md:px-[250px] px-5 relative">
            <Navbar/>
            <div className="flex w-full flex-col gap-8 z-50 items-center
                            justify-center fixed top-[50%] left-[50%]
                            translate-x-[-50%] translate-y-[-50%]">
                <span className="md:text-4xl text-3xl font-semibold text-orange-100">
                    Hi, I'm Ilya
                </span>
                <span className="md:text-7xl text-6xl font-semibold text-orange-200 text-center">
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
                <div className="flex w-full items-center justify-center gap-5">
                    <LogoInstagram
                        color={"#fff"}
                        width={"30px"}
                        height={"30px"}
                    />
                    <LogoGithub
                        color={"#fff"}
                        width={"30px"}
                        height={"30px"}
                    />
                    <LogoLinkedin
                        color={"#fff"}
                        width={"30px"}
                        height={"30px"}
                    />
                    <LogoFigma
                        color={"#fff"}
                        width={"30px"}
                        height={"30px"}
                    />

                </div>
                <div className="flex w-full items-center justify-center gap-8">
                    <button className="text-white rounded-full bg-orange-400
                                        hover:bg-orange-500 transition-all
                                        duration-300 w-fit px-5 py-3 font-medium"
                    >Connect whit me</button>
                    <button className="text-white animate-bounce rounded-full
                                        border-2 border-orange-400 hover:bg-orange-500
                                        transition-all duration-300 w-fit px-5 py-3
                                        font-medium">
                        See my work
                    </button>
                </div>
            </div>
            <div className="flex w-full z-10 h-full bg-[#120800] opacity-[0.82] absolute
                            top-0 left-0">

            </div>
        </div>
    );
};

export default Hero;