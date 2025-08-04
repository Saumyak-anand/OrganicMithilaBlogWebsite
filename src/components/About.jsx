import Image from "next/image";
import aboutImage from "../assets/aboutImage.jpg";

export default function About() {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <Image
            src={aboutImage.src}
            alt="About us organic farming"
            width={800}
            height={600}
            objectFit="cover"
          />
        </div>

        <div className="text-left">
          <h2 className="text-4xl font-extrabold text-cyan-700 leading-tight mb-4 text-center">
            Our Story: A Commitment to Purity
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Welcome to Organic Mithila! Our journey began with a simple belief:
            to bring the ancient, wholesome goodness of Makhana directly from
            the fertile lands of Mithila to your table. We are a community of
            passionate farmers dedicated to sustainable and organic farming
            practices, ensuring every seed is grown without harmful chemicals or
            pesticides.
          </p>
          <p className="mt-4 text-xl text-gray-600">
            Our blog is a tribute to this legacy, sharing the traditions, health
            benefits, and incredible journey of this superfood. Join us as we
            celebrate a healthier lifestyle and honor the rich agricultural
            heritage of Mithila.
          </p>
        </div>
      </div>
    </div>
  );
}
