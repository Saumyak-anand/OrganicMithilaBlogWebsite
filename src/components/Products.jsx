import Image from "next/image";
import Slideshow from "./Slideshow";
import Slide1_1 from "../assets/Slide1_1.jpg";
import Slide1_2 from "../assets/Slide1_2.jpg";
import Slide1_3 from "../assets/Slide1_3.jpg";
import Slide1_4 from "../assets/Slide1_4.jpg";
import Slide2_1 from "../assets/Slide2_1.jpg";
import Slide2_2 from "../assets/Slide2_2.jpg";
import Slide2_3 from "../assets/Slide2_3.jpg";
import Slide2_4 from "../assets/Slide2_4.jpg";
import Slide2_5 from "../assets/Slide2_5.jpg";
import Silde3_1 from "../assets/monday.jpg";
import Silde3_2 from "../assets/tuesday.jpg";
import Silde3_3 from "../assets/wednesday.jpg";
import Silde3_4 from "../assets/thursday.jpg";
import Silde3_5 from "../assets/friday.jpg";
import Silde3_6 from "../assets/saturday.jpg";
import Silde3_7 from "../assets/sunday.jpg";

const products = [
  {
    id: 1,
    name: "Premium Makhana",
    description:
      "Lightly roasted and salted, perfect for a healthy snack. A guilt-free treat for any time of the day.",
    images: [Slide1_1.src, Slide1_2.src, Slide1_3.src, Slide1_4.src],
  },
  {
    id: 2,
    name: "Flavoured Roasted Makhana",
    description:
      "Crispy and delicious, a great alternative to breakfast cereals. Mix with milk for a nutritious start to your day.",
    images: [
      Silde3_1.src,
      Silde3_2.src,
      Silde3_3.src,
      Silde3_4.src,
      Silde3_5.src,
      Silde3_6.src,
      Silde3_7.src,
    ],
  },
  {
    id: 3,
    name: "Achaar (Pickles)",
    description:
      "Finely ground Makhana flour, ideal for baking and cooking. A gluten-free way to enrich your meals.",
    images: [
      Slide2_1.src,
      Slide2_2.src,
      Slide2_3.src,
      Slide2_4.src,
      Slide2_5.src,
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
              <Slideshow images={product.images} interval={2000} />
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-900 leading-tight">
                {product.name}
              </h3>
              <p className="mt-2 text-gray-600">{product.description}</p>
              <button className="mt-4 inline-block px-6 py-2 text-md font-bold text-white bg-cyan-600 rounded-full shadow-lg hover:bg-cyan-700 transition-colors duration-300">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
