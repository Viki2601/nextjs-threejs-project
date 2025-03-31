"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Banner from "@/app/assets/landing/Kitchen.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function About() {
    const bgRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (bgRef.current) {
                const scrollY = window.scrollY;
                const scale = 1 + scrollY * 0.0005;
                bgRef.current.style.transform = `scale(${scale})`;
            }
        };

        let animationFrame;
        const onScroll = () => {
            if (animationFrame) cancelAnimationFrame(animationFrame);
            animationFrame = requestAnimationFrame(handleScroll);
        };

        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            if (animationFrame) cancelAnimationFrame(animationFrame);
        };
    }, []);

    const data = [
        { name: "Bathroom Fitters", desc: "We specialise in a diverse range of bathroom installation services throughout London, ensuring excellence in every aspect of our work." },
        { name: "Plumbers", desc: "Our expertise in plumbing spans a comprehensive array of services, including installation and repair of piping systems, radiators, and more." },
        { name: "Painters", desc: "From paint and wallpaper stripping to expert plastering, wallpapering, and a spectrum of painting services, we bring creativity to every surface." },
        { name: "Carpenters and Decorators", desc: "We specialize in carpentry services, crafting everything from cupboards to fitted furniture with precision and excellence." },
        { name: "Kitchen Fitters", desc: "Transform your space with exquisite designs. Our expert advice covers everything from colours to cabinetry and lighting." },
        { name: "Electricians", desc: "Our team provides all necessary services, from lighting upgrades to electrical panel installations, ensuring precision and excellence." },
        { name: "Flooring", desc: "Our services include floor installations, painting, decorating, decking, fencing, and door and window installation." },
        { name: "Roofing Contractors", desc: "From roof repairs to full replacements, we ensure the highest quality craftsmanship to protect your home." },
    ];

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 8000,
        autoplay: true,
        autoplaySpeed: 0,
        slidesToScroll: 1,
        cssEase: "linear",
        pauseOnHover: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 1 } }, // Tablets
            { breakpoint: 768, settings: { slidesToShow: 1 } },  // Mobile
        ],
    };

    return (
        <div className="relative w-full h-screen overflow-hidden font-urbanist">
            {/* Background Image */}
            <div
                ref={bgRef}
                className="fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-center transition-transform duration-300 ease-out will-change-transform"
                style={{ backgroundImage: `url(${Banner.src})` }}
            ></div>

            {/* Content Section */}
            <div className="relative flex flex-col-reverse md:flex-row h-full w-full">

                {/* Left Side: Empty for Background on larger screens */}
                <div className="hidden md:block md:w-1/2"></div>

                {/* Right Side: Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2 flex flex-col justify-center bg-[#003F6B] text-white shadow-lg px-10 py-10 md:py-0"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">About MAI...</h2>
                    <p className="text-base lg:text-lg">
                        The one-stop solution to all your Home needs. At MAI, we believe in transforming spaces into havens. Our skilled team includes professional plumbers, bathroom fitters, carpenters, electricians, painters, decorators, kitchen fitters, and more.
                    </p>

                    {/* Slider Section */}
                    <div className="relative mt-6">
                        <Slider {...settings} className="flex gap-x-4">
                            {data.map((about, index) => (
                                <div key={index} className="px-2 sm:px-4">
                                    <div className="bg-white text-center text-[#003F6B] sm:p-6 h-32 md:h-56 rounded-xl shadow-lg flex flex-col items-center justify-center">
                                        <h2 className="text-xl sm:text-2xl font-bold">{about.name}</h2>
                                        <p className="text-xs sm:text-sm mt-2">{about.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </Slider>

                        {/* Left Gradient Overlay */}
                        <div className="absolute top-0 left-0 h-32 md:h-56 w-6 sm:w-10 bg-gradient-to-r from-[#003F6B] via-[#003F6B99] to-transparent"></div>

                        {/* Right Gradient Overlay */}
                        <div className="absolute top-0 right-0 h-32 md:h-56 w-6 sm:w-10 bg-gradient-to-l from-[#003F6B] via-[#003F6B99] to-transparent"></div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
