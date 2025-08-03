import Image from "next/image";
import first from "../assets/first.png";
import second from "../assets/second.png";
import third from "../assets/third.png";
import fourth from "../assets/fourth.png";
import fifth from "../assets/fifth.png";


const journeySteps = [
  {
    id: 1,
    title: "Harvesting",
    description:
      "Seeds of the fox nut plant are collected from the bottom of ponds in a painstaking process, often by hand. This happens between October and December.",
    image: first,
  },
  {
    id: 2,
    title: "Cleaning & Drying",
    description:
      "The raw seeds are meticulously washed and then dried in the sun for several days to reduce their moisture content, preparing them for the next stage.",
    image: second,
  },
  {
    id: 3,
    title: "Roasting & Popping",
    description:
      "The dried seeds are roasted in a pan at high temperatures. The intense heat causes the hard seeds to pop, transforming them into the fluffy white Makhana.",
    image: third,
  },
  {
    id: 4,
    title: "Grading & Packaging",
    description:
      "The popped Makhana are then sorted by size and quality. Only the best are selected for packaging to maintain our premium standards.",
    image: fourth,
  },
  {
    id: 5,
    title: "Distribution",
    description:
      "Packaged Makhana is then carefully transported to our customers, ensuring freshness and quality from our farms to your doorstep.",
    image: fifth,
  },
];

export default function MakhanaJourney() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-cyan-700 leading-tight mb-4">
          The Journey of Makhana
        </h2>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          A traditional process, perfected over generations, to bring you the
          purest Makhana.
        </p>
      </div>

      
      <div className="mt-12 space-y-12 max-w-5xl mx-auto">
        {journeySteps.map((step, index) => (
          <div
            key={step.id}
            className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 rounded-2xl shadow-xl transition-all duration-300 transform hover:shadow-2xl ${
              index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
            }`}
          >
          
            <div
              className={`relative w-full md:w-1/2 rounded-xl overflow-hidden ${
                index % 2 !== 0 ? "md:order-2" : ""
              }`}
            >
              <Image
                src={step.image}
                alt={step.title}
                width={400}
                height={300}
                layout="responsive"
                className="rounded-xl"
              />
            </div>

        
            <div
              className={`text-left w-full md:w-1/2 ${
                index % 2 !== 0 ? "md:order-1" : ""
              }`}
            >
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-700 font-bold text-lg mb-4">
                {step.id}
              </span>
              <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-lg text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
