'use client';
import { motion } from "framer-motion";
import TestimonialBG from "@/app/assets/landing/unsplash.jpg";
import AutoCarousel from "@/common/Animation/AutoCarousel";

export default function Testimonials() {
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

    return (
        <div style={{ backgroundImage: `url(${TestimonialBG.src})`, backgroundSize: "cover", backgroundPosition: "center", }} className="relative w-full min-h-screen font-urbanist">
            <div className="bg-black/60 h-screen flex flex-col justify-center items-center text-[#D2BFA4] px-6 py-16">
                <h1 className="font-nico-moji text-5xl md:text-6xl text-center font-bold mb-10 backdrop-blur-xs p-6 border border-[#D2BFA4] rounded-2xl shadow-2xl">
                    Testimonials
                </h1>

                <div className="w-full h-full flex flex-col lg:flex-row lg:items-center justify-center gap-10">
                    {/* Left Auto Carousel */}
                    <div className="lg:w-1/2 rounded-2xl overflow-hidden">
                        <AutoCarousel speed={30} items={data?.map((testimonial, index) => (
                            <motion.div key={index} className="bg-[#D2BFA4] text-[#003F6B] p-6 rounded-lg shadow-lg h-full">
                                <h2 className="text-xl font-bold mb-2">❝{testimonial?.name}❞</h2>
                                <p className="text-gray-700 text-sm md:text-base line-clamp-4">
                                    {testimonial?.desc}
                                </p>
                            </motion.div>
                        ))}
                        />
                    </div>

                    {/* Right Section */}
                    <div className="font-nico-moji lg:w-1/2 space-y-5 text-left backdrop-blur-xs p-12 rounded-2xl shadow-2xl border border-[#D2BFA4]">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            With You We Will Impact More - People Really Matter
                        </h2>
                        <p className="text-lg leading-relaxed">
                            Entrepreneurs build families, families build communities,
                            communities together call "Nation". My vision is to build a
                            "Successful Nation" and I'm blessed to have wonderful family
                            members who are helping me bring the One Man Vision to the
                            Nation's vision.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}