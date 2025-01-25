import Banner from "../components/Banner";
import Languagecategory from "../components/Languagecategory";
import Ourgoal from "../components/Ourgoal";
import Stats from "../components/Stats";
import WeOffer from "../components/WeOffer";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <Stats></Stats>
           <Languagecategory></Languagecategory>
           <WeOffer></WeOffer>
           <Ourgoal></Ourgoal>
        </div>
    );
};

export default Home;