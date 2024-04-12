"use client"
import { BsDashLg } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useState } from 'react';
import { GrNext, GrPrevious } from "react-icons/gr";

const BrowseCategory: React.FC = () => {
    const category = [
        { id: 1, "logo": "https://cdn-icons-png.freepik.com/256/5968/5968350.png?ga=GA1.1.1242648836.1702358523&", "title": "Python" },
        { id: 2, "logo": "https://cdn-icons-png.freepik.com/256/1051/1051277.png?ga=GA1.1.1242648836.1702358523&", "title": "HTML" },
        { id: 3, "logo": "https://cdn-icons-png.freepik.com/256/732/732190.png?ga=GA1.1.1242648836.1702358523&", "title": "CSS" },
        { id: 4, "logo": "https://cdn-icons-png.freepik.com/256/6132/6132222.png?ga=GA1.1.1242648836.1702358523&", "title": "C++" },
        { id: 5, "logo": "https://cdn-icons-png.freepik.com/256/5968/5968292.png?ga=GA1.1.1242648836.1702358523&", "title": "Javascript" },
        { id: 5, "logo": "https://cdn-icons-png.freepik.com/256/5968/5968292.png?ga=GA1.1.1242648836.1702358523&", "title": "Javascript" },
        { id: 5, "logo": "https://cdn-icons-png.freepik.com/256/5968/5968292.png?ga=GA1.1.1242648836.1702358523&", "title": "Javascript" },
        { id: 5, "logo": "https://cdn-icons-png.freepik.com/256/5968/5968292.png?ga=GA1.1.1242648836.1702358523&", "title": "Javascript" },
    ];

    const [swiper, setSwiper] = useState<any>(null); // State to hold Swiper instance

    return (
        <div className="mb-28 mt-44">
            <div className="flex items-center justify-between mb-3">
                <h1 className="flex items-center gap-x-4">Browse Category <span><BsDashLg /></span></h1>
            </div>
            <div className="relative">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={5}
                    loop={true}
                    onSwiper={setSwiper} // Set the Swiper instance to state
                >
                    {category.map((c, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white text-slate-800 rounded-lg h-52 gap-y-5 flex flex-col justify-center">
                                <div className="flex flex-col items-center gap-y-3">
                                    <img className="w-1/2" src={c.logo} alt="" />
                                    <h1 className="font-bold">{c.title}</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Previous button */}
                <button
                    onClick={() => swiper && swiper.slidePrev()}
                    className="absolute left-0 transform -translate-x-1/2 top-1/2 -translate-y-1/2 text-2xl pr-14 p-2 rounded-full"
                >
                    <GrPrevious/>
                </button>
                {/* Next button */}
                <button
                    onClick={() => swiper && swiper.slideNext()}
                    className="absolute right-0 transform translate-x-1/2 top-1/2 -translate-y-1/2 text-2xl pl-14 p-2 rounded-full"
                >
                    <GrNext/>
                </button>
            </div>
        </div>
    );
};

export default BrowseCategory;
