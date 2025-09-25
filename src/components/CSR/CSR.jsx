"use client";
import { useScroll, useTransform } from "framer-motion";
import SABBG from "@/app/assets/landing/SAB.png";
import Image from "next/image";
import InnovativeFAQ from "@/common/Animation/InnovativeFAQ";
import { FiHeart, FiRefreshCw, FiUsers } from "react-icons/fi";
import GalleryCards from "@/common/Animation/GalleryCards";
import StackedCards from "@/common/Animation/StackedCards";
import Objective1 from "@/app/assets/landing/Objective1.png";
import Objective2 from "@/app/assets/landing/Objective2.png";
import Objective3 from "@/app/assets/landing/Objective3.png";
import Objective4 from "@/app/assets/landing/Objective4.png";
import Objective5 from "@/app/assets/landing/Objective5.png";
import Objective6 from "@/app/assets/landing/Objective6.png";
import { useRef } from "react";

export default function CSRpage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const services = [
        {
            id: "01",
            description:
                "MAI initiates a holistic approach to community well-being by extending its “Family Counselling Services” to the general public, fostering mental health and support for families in need through its project SAB.",
        },
        {
            id: "02",
            description:
                "The visionary movement initiated by MAI; SAB, is centred around fostering stronger families and building enduring relationships, is indeed commendable. The commitment to enhancing family unity through the 'Building Strong Families' initiative reflects a holistic approach aimed at creating nurturing environments where every family member feels valued, supported, and connected.",
        },
        {
            id: "03",
            description:
                "Expanding beyond the digital realm to integrate physical awareness programs is a significant step forward. Offering hands-on support to those in need, with a specific focus on the health and well-being of family relationships, underscores a genuine dedication to making a tangible impact on individuals' lives.",
        },
        {
            id: "04",
            description:
                "Through impactful awareness campaigns, both online and offline, MAI - SAB has the potential to become a beacon of hope for families seeking guidance and support. By fostering a sense of unity, understanding, and resilience within families, this movement can contribute significantly to building a more compassionate and cohesive society.",
        },
        {
            id: "05",
            description:
                "As the initiative progresses, it will be essential to maintain a steadfast commitment to the core values of empathy, inclusivity, and empowerment. By staying true to these principles, SAB can continue to inspire positive change and make a lasting difference in the lives of countless families.",
        },
    ];

    const processSteps = [
        {
            icon: <FiHeart className="text-2xl" />,
            title: "Help-Line Services",
            description: "Establish a dedicated helpline offering maximum support for individuals and families in need of immediate assistance, guidance, or crisis intervention."
        },
        {
            icon: <FiUsers className="text-2xl" />,
            title: "Well-Trained Counselling Professionals",
            description: "Our Professionals will extend their support for individuals and families in need of immediate assistance, guidance, or crisis intervention."
        },
        {
            icon: <FiRefreshCw className="text-2xl" />,
            title: "Information or Referral Services",
            description: "We shall facilitate appropriate referrals based on the client’s needs. Also offer information about available mental health resources and community support organisations."
        }
    ];

    const faqs = [
        {
            question: "1. Share Your Story Through Us",
            answer: "Inspire others by sharing your personal experiences and challenges in building strong family bonds. Your story may resonate with others, providing a source of encouragement and connection."
        },
        {
            question: "2. Foster Open Communication",
            answer: "Practise active listening and open communication within your family, creating an environment where every member feels heard and valued."
        },
        {
            question: "3. Prioritise Well-being",
            answer: "Emphasise the importance of self and others' well-being. By focusing on holistic health, we contribute to the overall strength of families. Check out families around you and identify opportunities to offer support or create connections within your local community."
        },
        {
            question: "4. Join our Regular Programs",
            answer: "Engage in educational programs conducted by SAB to enhance your understanding of family dynamics and relationship-building. By becoming more knowledgeable, you can contribute to a culture of shared wisdom within the community."
        },
        {
            question: "5. Host SAB Events in Your Community",
            answer: "Take the initiative to organise SAB events in your local community. Whether it's a workshop, seminar, or awareness campaign, hosting events allows you to actively contribute to the dissemination of knowledge and support."
        },
        {
            question: "6. Collaborate with Local Communities",
            answer: "Extend SAB's reach by collaborating with local communities. Partner with schools, community centres, or other organisations to bring awareness and resources to families at a grassroots level."
        },
        {
            question: "7. Support SAB Partnerships",
            answer: "Explore and support SAB's partnerships with other organisations and businesses dedicated to family well-being. By endorsing and participating in these collaborations, you contribute to a broader network focused on building strong families"
        },
        {
            question: "8. Volunteer Counselling Services",
            answer: "If you are an expert in counselling, or if you hold a degree in psychology or related fields, consider volunteering your expertise to provide support and guidance to families facing challenges"
        },
    ];

    // Animation values for each card
    const card1Y = useTransform(scrollYProgress, [0, 0.3], [500, 0]);
    const card1Opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    const card2Y = useTransform(scrollYProgress, [0.2, 0.5], [500, 0]);
    const card2Opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

    const card3Y = useTransform(scrollYProgress, [0.4, 0.7], [500, 0]);
    const card3Opacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

    const card4Y = useTransform(scrollYProgress, [0.6, 0.9], [500, 0]);
    const card4Opacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

    const card5Y = useTransform(scrollYProgress, [0.8, 1.1], [500, 0]);
    const card5Opacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

    const card6Y = useTransform(scrollYProgress, [1, 1.3], [500, 0]);
    const card6Opacity = useTransform(scrollYProgress, [1, 1.2], [0, 1]);

    const cards = [
        {
            id: 1,
            content: "Ensure that family counselling services are easily accessible to individuals and families, removing barriers such as financial constraints or geographical limitations.",
            y: card1Y,
            opacity: card1Opacity,
            stickyStart: 0.3,
            stickyEnd: 0.6,
            rotation: 5,
            img: Objective1
        },
        {
            id: 2,
            content: "Provide comprehensive mental health support that addresses the diverse needs of families, including emotional, psychological, and relational aspects.",
            y: card2Y,
            opacity: card2Opacity,
            stickyStart: 0.5,
            stickyEnd: 0.8,
            rotation: -2,
            img: Objective2
        },
        {
            id: 3,
            content: "Tailor family counselling services to be culturally sensitive and inclusive, recognizing and respecting diverse backgrounds and belief systems.",
            y: card3Y,
            opacity: card3Opacity,
            stickyStart: 0.7,
            stickyEnd: 1,
            rotation: 3,
            img: Objective3
        },
        {
            id: 4,
            content: "Develop specialized programs for different family structures and life stages, from newly formed families to multigenerational households.",
            y: card4Y,
            opacity: card4Opacity,
            stickyStart: 0.9,
            stickyEnd: 1.2,
            rotation: -4,
            img: Objective4
        },
        {
            id: 5,
            content: "Implement outreach initiatives to raise awareness about mental health and reduce stigma surrounding family counselling services.",
            y: card5Y,
            opacity: card5Opacity,
            stickyStart: 1.1,
            stickyEnd: 1.4,
            rotation: 5,
            img: Objective5
        },
        {
            id: 6,
            content: "Establish partnerships with community organizations to create a network of support services for families in need.",
            y: card6Y,
            opacity: card6Opacity,
            stickyStart: 1.2,
            stickyEnd: 1.6,
            rotation: -2,
            img: Objective6
        }
    ];

    return (
        <div>
            <div className="flex flex-col-reverse md:flex-row w-full font-urbanist bg-[#003F6B]">
                {/* Left Sticky Section */}
                <div className="w-full md:w-2/5 h-[56vh] md:h-screen flex flex-col items-center justify-center space-y-5 sticky bottom-0 md:top-0 rounded-t-full md:rounded-t-none md:rounded-r-full bg-[#FFCC29] p-6">
                    <Image src={SABBG} width={1000} height={1000} alt="SAB" className="w-44 lg:hidden" />
                    <h1 className="text-3xl md:text-5xl font-bold text-[#2E4372] text-center leading-tight">
                        A Visionary Movement <br /> To Build Strong Families - CSR
                    </h1>
                    <p className="text-[#2E4372] max-w-lg text-center">SAB's primary objective is to raise awareness about the critical importance of nurturing strong bonds within diverse family dynamics. Whether it involves the relationship between a mother and daughter, father and son, husband and wife, or any other familial connection, we highlight the significance of strengthening these bonds. We firmly believe that a healthy family serves as the cornerstone of a prosperous nation. A well-supported child excels in learning, exudes positivity, and ultimately contributes to building a stronger society.</p>
                </div>

                {/* Right Scrolling Section */}
                <div className="w-full md:w-3/5 space-y-16 md:space-y-24 p-6 md:p-10 bg-[#003F6B]">
                    {services?.map((service, index) => (
                        <div key={index} className="flex flex-col justify-center items-center h-[70vh] space-y-4 text-center">
                            <div className="text-6xl md:text-9xl text-gray-400 font-bold">
                                {service?.id}
                            </div>
                            <p className="text-[#F5F5F5] tracking-widest text-lg md:text-xl max-w-3xl">
                                {service?.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <StackedCards data={cards} scrollYProgress={scrollYProgress} containerRef={containerRef} />
            <InnovativeFAQ data={faqs} />
            <GalleryCards data={processSteps} />
        </div>
    );
}