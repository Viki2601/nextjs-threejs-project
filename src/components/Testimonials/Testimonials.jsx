import Ticker from "@/common/Animation/Ticker";

export default function Testimonials() {
    const testimonials = [
        {
            quote: "Thanks to Epic's intuitive design, our project management process has become seamless.",
            name: "Anne Weying",
            role: "Project Manager, Tesla Inc.",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            quote: "The 3D renderings provided were absolutely stunning. Their work helped us secure new clients.",
            name: "Robert Muldoon",
            role: "Visual Designer, Bose.",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            quote: "Epic's VFX services brought our marketing campaign to life. The quality and attention to detail were unmatched.",
            name: "Owen Grady",
            role: "Art Director, Coca-Cola.",
            image: "https://randomuser.me/api/portraits/men/22.jpg",
        },
        {
            quote: "Thanks to Epic's intuitive design, our project management process has become seamless.",
            name: "Anne Weying",
            role: "Project Manager, Tesla Inc.",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            quote: "The 3D renderings provided were absolutely stunning. Their work helped us secure new clients.",
            name: "Robert Muldoon",
            role: "Visual Designer, Bose.",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            quote: "Epic's VFX services brought our marketing campaign to life. The quality and attention to detail were unmatched.",
            name: "Owen Grady",
            role: "Art Director, Coca-Cola.",
            image: "https://randomuser.me/api/portraits/men/22.jpg",
        },
    ];

    return (
        <div className="mt-26 py-16 font-urbanist">
            <h2 className="text-center text-4xl font-bold text-[#D2BFA4] mb-10">
                Trusted By
            </h2>
            <div className="m-6 lg:m-10 overflow-hidden rounded-xl lg:rounded-4xl">
                <Ticker items={testimonials} speed={30} hoverSpeed={10} direction="left" />
            </div>
            <div className="m-6 lg:m-10 overflow-hidden rounded-xl lg:rounded-4xl">
                <Ticker items={testimonials} speed={30} hoverSpeed={10} direction="right" />
            </div>
        </div>
    );
}