import {useNavigate} from "react-router";
import {LogoGithub, LogoInstagram, LogoLinkedin} from "react-ionicons";

const Navbar = () => {
    const navigate = useNavigate();
    const navLinks = [
        {title:"Home", path:"/", active:true},
        {title:"Portfolio", path:"/", active:false},
        {title:"Newsletter", path:"/newsletter", active:false},
        {title:"Contact", path:"/contact", active:false},
        {title:"About", path:"/about/", active:false},
    ];
    return <div className="w-full h-[60px] fixed top-4 left-0 flex z-50">
        <nav className="w-full md:px-[235px] px-[23px] flex items-center justify-between">
            <div className="text-orange-400 font-bold text-[28px] cursor-pointer
                            md:ml-[12px]"
                onClick={() => navigate("/")}>
                Owl<span className="text-orange-200">Team</span>
            </div>
            <div className="hidden md:flex items-center gap-12">
                {navLinks.map((link) => {
                    return (<a href={link.path}
                               key={link.title}
                               className="font-normal text-[15px] text-white
                                          transition-all duration-200 hover:text-orange-400">
                        {link.title}
                    </a>)
                    }
                    )};
            </div>
            <div className="flex items-center gap-6">
                <LogoInstagram
                    color={"#fff"}
                    cssClasses={"cursor-pointer hover:text-orange-400 transition-all duration-300"}
                />
                <LogoGithub
                    color={"#fff"}
                    cssClasses={"cursor-pointer hover:text-orange-400 transition-all duration-300"}
                />
                <LogoLinkedin
                    color={"#fff"}
                    cssClasses={"cursor-pointer hover:text-orange-400 transition-all duration-300"}
                />
            </div>
        </nav>
    </div>
};

export default Navbar;