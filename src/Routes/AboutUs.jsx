import Header from "./About/Header";
import Team from "./About/Team";
import Why from "./About/Why";


const AboutUs = () => {
    return (
        <div>
            <Header></Header>
            <hr className="border-1 border-dashed text-sm mt-20" />
            <Team></Team>
            <hr className="border-1 border-dashed text-sm mt-20" />
            <Why></Why>
        </div>
    );
};

export default AboutUs;