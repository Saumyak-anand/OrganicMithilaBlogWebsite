"use client";
import Link from "next/link";
import Image from "next/image";
import coverPage from "../assets/coverPage.jpg";
import MithilaLogo from "../assets/mithilaLogo.png";

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center text-center overflow-hidden">

      <div className="absolute inset-0 z-0">
        <Image
          src={coverPage}
          alt="Mithila Makhana field"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="filter brightness-75"
        />
      </div>

      <div className="relative z-10 p-8 md:p-12 text-white max-w-4xl mx-auto">
        <div className="mt-10 mb-5 w-full flex justify-center">
          <Image src={MithilaLogo} alt="MithilaLogo" className="w-125 " />
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tighter">
          From the Heart of Mithila to Your Home
        </h1>
        <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-light">
          Discover the pure, organic goodness of Makhana, cultivated with love
          and tradition.
        </p>
        <Link
          href="#about"
          className="mt-8 inline-block px-8 py-4 text-lg font-bold text-cyan-800 bg-white rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105 hover:bg-cyan-700 hover:text-white"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
