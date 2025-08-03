import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="mb-2 rounded-lg overflow-hidden border border-gray-200 shadow-sm"
        >
          <div
            className={`flex justify-between items-center px-6 py-4 cursor-pointer transition-colors duration-300 ${
              openIndex === index ? "bg-gray-100" : "bg-white hover:bg-gray-50"
            }`}
            onClick={() => handleItemClick(index)}
          >
            <h3 className="text-lg font-medium text-gray-800">{item.title}</h3>
            <svg
              className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>

          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              openIndex === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="p-6 bg-gray-50 border-t border-gray-200">
              <p className="text-sm text-gray-600">{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
