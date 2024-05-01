import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";


const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute flex items-center left-0 top-0 w-2/3 bg-gradient-to-r from-[#151515] to-[#15151500] h-full rounded-xl">
                    <div className="text-white space-y-8 pl-20">
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex gap-3">
                            <button className="btn bg-[#FF3811] border-[#FF3811] text-white hover:border-white hover:bg-stone-500">Discover More</button>
                            <button className="btn bg-[#FF3811] border-[#FF3811] text-white hover:border-white hover:bg-stone-500">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-3 transform -translate-y-1/2  justify-end right-5 left-5 bottom-12">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                <div className="absolute flex items-center left-0 top-0 w-2/3 bg-gradient-to-r from-[#151515] to-[#15151500] h-full rounded-xl">
                    <div className="text-white space-y-8 pl-20">
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex gap-3">
                            <button className="btn bg-[#FF3811] border-[#FF3811] text-white hover:border-white hover:bg-stone-500">Discover More</button>
                            <button className="btn bg-[#FF3811] border-[#FF3811] text-white hover:border-white hover:bg-stone-500">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-3 transform -translate-y-1/2 justify-end right-5 left-5 bottom-12">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />
                <div className="absolute flex items-center left-0 top-0 w-2/3 bg-gradient-to-r from-[#151515] to-[#15151500] h-full rounded-xl">
                    <div className="text-white space-y-8 pl-20">
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex gap-3">
                            <button className="btn bg-[#FF3811] border-[#FF3811] text-white hover:border-white hover:bg-stone-500">Discover More</button>
                            <button className="btn bg-[#FF3811] border-[#FF3811] text-white hover:border-white hover:bg-stone-500">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-3 transform -translate-y-1/2  justify-end right-5 left-5 bottom-12">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl" />
                <div className="absolute flex items-center left-0 top-0 w-2/3 bg-gradient-to-r from-[#151515] to-[#15151500] h-full rounded-xl">
                    <div className="text-white space-y-8 pl-20">
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex gap-3">
                            <button className="btn bg-[#FF3811] border-[#FF3811] text-white hover:border-white hover:bg-stone-500">Discover More</button>
                            <button className="btn bg-[#FF3811] border-[#FF3811] text-white hover:border-white hover:bg-stone-500">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-3 transform -translate-y-1/2  justify-end right-5 left-5 bottom-12">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full rounded-xl" />
                <div className="absolute flex items-center left-0 top-0 w-2/3 bg-gradient-to-r from-[#151515] to-[#15151500] h-full rounded-xl">
                    <div className="text-white space-y-8 pl-20">
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex gap-3">
                            <button className="btn bg-[#FF3811] border-[#FF3811] text-white hover:border-white hover:bg-stone-500">Discover More</button>
                            <button className="btn bg-[#FF3811] border-[#FF3811] text-white hover:border-white hover:bg-stone-500">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-3 transform -translate-y-1/2  justify-end right-5 left-5 bottom-12">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full rounded-xl" />
                <div className="absolute flex items-center left-0 top-0 w-2/3 bg-gradient-to-r from-[#151515] to-[#15151500] h-full rounded-xl">
                    <div className="text-white space-y-8 pl-20">
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex gap-3">
                            <button className="btn bg-[#FF3811] border-[#FF3811] text-white hover:border-white hover:bg-stone-500">Discover More</button>
                            <button className="btn bg-[#FF3811] border-[#FF3811] text-white hover:border-white hover:bg-stone-500">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-3 transform -translate-y-1/2  justify-end right-5 left-5 bottom-12">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;