import Image from "next/image";
import Slideshow from "./Slideshow";
import Slide1_1 from "../../public/assets/Slide1_1.jpg";
import Slide1_2 from "../../public/assets/Slide1_2.jpg";
import Slide1_3 from "../../public/assets/Slide1_3.jpg";
import Slide1_4 from "../../public/assets/Slide1_4.jpg";
import Slide2_1 from "../../public/assets/Slide2_1.jpg";
import Slide2_2 from "../../public/assets/Slide2_2.jpg";
import Slide2_3 from "../../public/assets/Slide2_3.jpg";
import Slide2_4 from "../../public/assets/Slide2_4.jpg";
import Slide2_5 from "../../public/assets/Slide2_5.jpg";
import Slide3_1 from "../../public/assets/monday.jpg";
import Slide3_2 from "../../public/assets/tuesDay.jpg";
import Slide3_3 from "../../public/assets/wednesday.jpg";
import Slide3_4 from "../../public/assets/thursday.jpg";
import Slide3_5 from "../../public/assets/friday.jpg";
import Slide3_6 from "../../public/assets/saturday.jpg";
import Slide3_7 from "../../public/assets/sunday.jpg";

const products = [
  {
    id: 1,
    name: "Premium Makhana",
    link: "https://mithilanaturals.com/collections/plain-makhana",
    description:
      "Premium Quality Handpicked Makhana seeds straight from the ponds of Mithilanchal. A must delicacy during the months of fasting. A best healthy alternative gifting option during festivals.",
    images: [Slide1_1.src, Slide1_2.src, Slide1_3.src, Slide1_4.src],
    nameMakhana: [
      "Shri Makhana",
      "Premium Mithila Makhana",
      "Mithila Makhana",
      "Madhubani Makhana",
    ],
  },
  {
    id: 2,
    name: "Flavoured Roasted Makhana",
    link: "https://mithilanaturals.com/collections/roasted-makhana",
    description:
      "Crispy and delicious, with upto 7+ flavours, fit for food cravings for every day of the week. Ready to eat snacks for every occasion. Just open the seal & let the flavours burst in your mouth.",
    images: [
      Slide3_1.src,
      Slide3_2.src,
      Slide3_3.src,
      Slide3_4.src,
      Slide3_5.src,
      Slide3_6.src,
      Slide3_7.src,
    ],
    nameMakhana: [
      "Cream & Onion",
      "Peri-Peri",
      "Mint Munch",
      "Cheese & Herbs",
      "Fasting Makhana",
      "Barbeque Balls",
      "Thai Chilli",
    ],
  },
  {
    id: 3,
    name: "Achaar (Pickles)",
    description:
      "Tangy-chatpatta, our household favourite Achaar (pickles) in various flavours. No more need to wait for them to dry under the sunlight.Just pick one and start enjoying.",
    images: [
      Slide2_1.src,
      Slide2_2.src,
      Slide2_3.src,
      Slide2_4.src,
      Slide2_5.src,
    ],
    nameMakhana: [
      "Amle Ka Achaar",
      "Bharwan Mirch ka Achaar",
      "Dal Ka Achaar",
      "Aam Ka Achaar",
      "Hari Mirch Ka Achaar",
    ],
  },
];

export default function Products() {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 rounded-xl shadow-inner">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-cyan-700 leading-tight mb-4">
          Our Organic Products
        </h2>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          From raw seeds to delicious snacks, every product is crafted with care
          and a commitment to quality.
        </p>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-xl overflow-hidden p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative w-full h-64 rounded-xl overflow-hidden">
              <Slideshow
                images={product.images}
                name={product.nameMakhana}
                interval={2000}
              />
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-extrabold text-cyan-700 leading-tight text-center underline">
                {product.name}
              </h3>
              <p className="mt-2 text-gray-600">{product.description}</p>
              <div className="flex justify-center items-center">
                <a href={product.link} target="_blank">
                  <button className="mt-4 inline-block px-6 py-2 text-md font-bold text-white bg-cyan-600 rounded-full shadow-lg hover:bg-cyan-700 hover:cursor-pointer transition-colors duration-300">
                    View Details
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
