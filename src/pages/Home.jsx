import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import BecomeATutor from "../components/BecomeATutor";
import Howitworks from "../components/Howitworks";
import Languagecategory from "../components/Languagecategory";
import Ourgoal from "../components/Ourgoal";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import WeOffer from "../components/WeOffer";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <Stats></Stats>
           <Languagecategory></Languagecategory>
           <Howitworks></Howitworks>
           <BecomeATutor />
           <AboutUs />
           <WeOffer></WeOffer>
           <Ourgoal></Ourgoal>
           <Testimonials />
        </div>
    );
};

export default Home;