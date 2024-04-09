import Hero from "../../components/Hero.tsx";
import About from "../../components/About.tsx";
import Projects from "../../components/Projects.tsx";
import Services from "../../components/Services.tsx";
import Banner from "../../components/Banner.tsx";
import Contact from "../../components/Contact.tsx";
import Footer from "../../components/Footer.tsx";

const Home = () => {
    return(
        <div className="w-full">
            <Hero />
            <About />
            <Projects />
            <Services />
            <Banner />
            <Contact />
            <Footer />
        </div>
    )
};

export default Home;