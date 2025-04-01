import Landing from "./components/landing";
import About from "./components/about";
import DetailedView from "./components/detailedView";
import SAB from "./components/sab";
import Testimonials from "./components/testimonials";
import Cursor from "./cursor/page";

export default function Home() {
  return (
    <main>
      <Cursor />
      <section className="py-5 w-full flex justify-center items-center h-screen ">
        <Landing />
      </section>
      <section className="w-full flex justify-center items-center min-h-screen ">
        <About />
      </section>
      <section className="w-full flex justify-center items-center min-h-screen ">
        <DetailedView />
      </section>
      <section className="w-full flex justify-center items-center min-h-screen ">
        <SAB />
      </section>
      <section className="w-full flex justify-center items-center min-h-screen ">
        <Testimonials />
      </section>
    </main>
  );
}
