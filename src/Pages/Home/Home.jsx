import About from "./About/About";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";



const Home = () => {
    return (
        <div>
            {/* banner */}
            <Banner></Banner>
            
            {/* About */}
            <About></About>

            {/* services */}
            <Services></Services>
        </div>
    );
};

export default Home;