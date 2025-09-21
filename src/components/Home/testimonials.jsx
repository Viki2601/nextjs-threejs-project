'use client';
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import TestimonialBG from "@/app/assets/landing/unsplash.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Testimonials() {
    const bgRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (bgRef.current) {
                const scrollY = window.scrollY;
                const scale = 1 + scrollY * 0.0005; // Adjust for zoom effect
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
        { name: "Manikandan.S", desc: "Been working With GMS since Sep 2020, I have really seen the company grow. My career has skied with the growth of the company and I have had a chance to work with a very close team and founders. A conducive and employee-friendly work environment has helped me grow and develop my skills while making sure I deliver quality work to my clients as well. It has a good work-life balance too. I am glad that I made the decision to work here & I look forward to being a part of this organization for a long time to come." },
        { name: "Ashritha", desc: "I've worked closely with GMS for 2 years, and it's been an incredible journey. Their vast working experience truly sets them apart in their field. MAI brings knowledge, skills, and a deep understanding of the industry to every project they tackle. MAI consistently promotes an environment where teamwork, creativity, and innovation thrive. It's clear that they understand the importance of collaboration and recognise that the best results often come from a diverse and inclusive team. As a Team Lead for Digital Marketing and Content Writing, I am proud to be a part of this beautiful organisation with excellent colleagues. I wholeheartedly recommend MAI to anyone looking for great work experience and a perfect work environment." },
        { name: "Dimple", desc: "Oh MAI, MAI , MAI!! It has been a wonderful journey so far. In the past 1.5 years with the team, I’ve observed that our director cum founder, G M S Sir always makes sure that we feel involved and seen. Every individual's efforts and opinions are valued. The organisation makes its best effort to maximise each person's potential and develop them into leaders, not just merely workers. I look forward to many more years of growth and success, personally as well as collectively." },
        { name: "Durga Devi", desc: "MAI is the best place to continue my career. In the team, everyone is supporting each other and helping for the growth of Organization. I am really happy to be a part of this family. As a leader of an SEO team, I am putting my best effort to lead myself and my team. I hope that I will be strong enough to tackle all kinds of highs and lows and be more supportive of my organization and its growth." },
        { name: "Muralidharan", desc: "MAI is a personally connected workplace with a productive team. I work here as a Business Development Executive with the help of Mr Santhosh Kumar I learnt new techniques in business development and ownership quality. I wanted to grow more and use every opportunity here to improve myself. I am happy to be a part of MAI Family" },
        { name: "Gayathri", desc: "I started my career here @MAI, a fast yet flourishing work environment that gave me the confidence I lacked before. Here, I learned that people are not strangers but a family, guiding and connecting with everyone personally and also helping me with every work-related concern. The whole team made me feel safe and secure around, even after the tantrums I caused. Thank you, MAI. A Happy-Wappy place to work!" },
        { name: "Akash", desc: "I was a newbie when I joined MAI, and now, being promoted to the Technical Executive role is something I consider as big as a skyline. I genuinely love working here, and I owe a significant part of my growth to the incredible support and mentorship I've received from GMS and the entire team. When I first walked through those doors, I was uncertain and lacked the self-confidence needed for my role. However, I've not only acquired the technical expertise required for the position but also transformed into a more confident and effective communicator. Thank you, MAI, for believing in me and providing me with the tools and support I needed to reach new heights in my career" },
        { name: "Pridheep", desc: "I've had the distinct pleasure of being part of the MAI family, and it has been a transformative experience in every sense. MAI isn't just a workplace; it's a community that embodies exceptional culture, leadership, and values. The culture at MAI is nothing short of remarkable. It's where innovation is nurtured, diversity is celebrated, and collaboration is second nature. It's heartening to be part of a company that doesn't just talk about social responsibility but actively participates in initiatives that give back and create lasting change. I'm not just proud to be part of MAI; I'm grateful to have found a home where excellence is not just encouraged but expected and where making a difference is not just a choice but a way of life. Working with someone who achieves professional excellence and elevates the entire work experience for those lucky enough to join their team is an honour" },
    ];

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 8000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } }, // Tablets
            { breakpoint: 468, settings: { slidesToShow: 1 } },  // Mobile
        ]
    };

    return (
        <div
            style={{
                backgroundImage: `url(${TestimonialBG.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="relative w-full h-screen font-urbanist"
        >
            <div className="bg-black/60 h-full flex flex-col justify-center items-center text-white px-10 py-10">
                {/* Section Title */}
                <h1 className="text-6xl text-center font-bold mb-10">Testimonials</h1>

                <div className="w-full flex flex-col lg:flex-row lg:items-center">
                    {/* Left Section */}
                    <div className="lg:w-1/2 relative">
                        <Slider {...settings}>
                            {data.map((testimonial, index) => (
                                <motion.div
                                    key={index}
                                    className="px-4"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="max-w-md text-[#003F6B] bg-white p-6 m-4 rounded-lg shadow-lg space-y-5 relative">

                                        <h2 className="text-2xl font-bold">❝{testimonial.name}❞</h2>
                                        <p className="line-clamp-4 text-gray-700">{testimonial.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </Slider>
                        <div className="absolute top-0 right-0 bg-gradient-to-l from-red-700 via-gray-500 to-transparent"></div>

                    </div>

                    {/* Right Section (Testimonials Slider) */}
                    <div className="lg:w-1/2 lg:px-10 space-y-5 relative">
                        <h2 className="text-4xl font-bold">
                            With You We Will Impact More - People Really Matter
                        </h2>
                        <p className="text-lg">
                            Entrepreneurs build families, families build communities, communities together call "Nation".
                            My vision is to build a "Successful Nation" and I'm blessed to have wonderful family members
                            who are helping me bring the One Man Vision to the Nation's vision.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
