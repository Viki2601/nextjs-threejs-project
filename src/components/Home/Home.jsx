import Cursor from '@/common/Cursor/Cursor'
import Landing from './landing'
import SuccessStories from './SuccessStories'
import About from './about'
import FAQSection from './FAQSection'
import Services from './Services'
import SAB from './sab'
import GrowTogether from './GrowTogether'
import Testimonials from './testimonials'

const Home = () => {
    return (
        <main>
            <Cursor />
            <section id="scroll-wrapper" className="py-5 w-full flex justify-center items-center h-screen ">
                <Landing />
            </section>
            <section className="w-full flex justify-center items-center min-h-screen ">
                <SuccessStories />
            </section>
            <section className="w-full flex justify-center items-center min-h-screen ">
                <About />
            </section>
            <section className="w-full flex justify-center items-center min-h-screen ">
                <GrowTogether />
            </section>
            {/* <section className="w-full flex justify-center items-center min-h-screen ">
                <FAQSection />
            </section>
            <section className="w-full flex justify-center items-center min-h-screen ">
                <Services />
            </section> */}
            <section className="w-full flex justify-center items-center min-h-screen ">
                <Testimonials />
            </section>
            <section className="w-full flex justify-center items-center min-h-screen ">
                <SAB />
            </section>
        </main>
    )
}

export default Home