
import Landing from "./components/landing";
import About from "./components/about";
import DetailedView from "./components/detailedView";
import SAB from "./components/sab";
import Testimonials from "./components/testimonials";
import Cursor from "./cursor/page";
import StackedCards from "./components/stackCards.jsx";
import Services from "./components/slideOpener";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClientWrapper from "./components/ClientWrapper";


export default function Home() {
  return (
    <main>
      {/* <Cursor /> */}
      <div
        id="blur-overlay"
        className="fixed inset-0 z-[5] pointer-events-none backdrop-blur-none transition-all duration-300"
      />
      <div className="bg-white flex justify-center items-center h-screen ">
        <ClientWrapper />
      </div>
      <section id="scroll-wrapper" className="py-5 w-full flex justify-center items-center h-screen ">
        <Landing />
      </section>
      <section className="w-full flex justify-center items-center min-h-screen ">
        <StackedCards />
      </section>
      <section className="w-full flex justify-center items-center min-h-screen ">
        <About />
      </section>
      <section className="w-full flex justify-center items-center min-h-screen ">
        <DetailedView />
      </section>
      <section className="w-full flex justify-center items-center min-h-screen ">
        <Services />
      </section>
      <section className="w-full flex justify-center items-center min-h-screen ">
        <SAB />
      </section>
      {/* <section className="w-full flex justify-center items-center min-h-screen ">
        <Testimonials />
      </section> */}
      <ToastContainer position="top-right" autoClose={3000} />
    </main>
  );
}
