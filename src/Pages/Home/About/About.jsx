/* eslint-disable react/no-unescaped-entities */
import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div className="hero my-32">
            <div className="hero-content flex-col lg:flex-row gap-16">
                <div className="lg:w-1/2 relative">
                    <img src={person} className="w-3/4 rounded-lg" />
                    <img src={parts} className="w-1/2 rounded-lg absolute right-0 top-1/2 border-8 border-white" />
                </div>
                <div className="lg:w-1/2">
                    <h2 className="text-3xl text-[#FF3811] font-bold mb-3">About Us</h2>
                    <h1 className="text-5xl mb-3 font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="pb-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn bg-[#FF3811] border-[#FF3811] hover:border-[#FF3811] hover:bg-transparent hover:text-[#FF3811] btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;