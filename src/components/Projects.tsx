import p1 from "../assets/Projects/p1.jpg"
import p2 from "../assets/Projects/p2.jpg"
import p3 from "../assets/Projects/p3.jpg"
import p4 from "../assets/Projects/p4.jpg"
import p5 from "../assets/Projects/p5.jpg"
import p6 from "../assets/Projects/p6.jpg"
const Projects = () => {
    const projectList = [
        {image: p1, title: "Project"},
        {image: p2, title: "Project"},
        {image: p3, title: "Project"},
        {image: p4, title: "Project"},
        {image: p5, title: "Project"},
        {image: p6, title: "Project"},
        {image: p5, title: "Project"},
        {image: p6, title: "Project"},
    ];
    return <div className="w-full px-[23px] bg-[#f6f6f6] relative z-[100]">
        <div className="flex w-full flex-col items-center justify-center gap-10 p-16">
            <div className="flex w-full flex-col gap-2 justify-center items-center">
                <span className="font-medium text-[30px] text-orange-600">
                    My Latest Projects
                </span>
                <p className="text-center text-gray-900">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
            </div>
            <ul className="flex w-full items-center justif gap-5 flex-wrap">
                {projectList.map((p, index: number) => {
                    return (
                        <li key={index} className="md:h-[40vh] h-fit grow">
                            <img
                                className="max-h-full min-w-full object-cover rounded-md
                               shadow-sm align-bottom"
                                src={p.image}
                                alt={p.title}
                            />
                        </li>
                    );
                })}
        </ul>
    </div>
    </div>
};

export default Projects;
