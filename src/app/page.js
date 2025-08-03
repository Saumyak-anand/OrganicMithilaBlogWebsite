import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import MakhanaJourney from "../components/MakhanaJourney.jsx";
import Products from "../components/Products.jsx";
import Contact from "../components/Contact";
import Help from "../components/Help";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      <Head>
        <title>Organic Mithila Blog</title>
        <meta
          name="description"
          content="A single-page blog about organic Mithila and the journey of Makhana."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        <Navbar />

        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="makhana-journey">
          <MakhanaJourney />
        </section>

        <section id="products">
          <Products />
        </section>
        <section id="help">
          <Help />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
